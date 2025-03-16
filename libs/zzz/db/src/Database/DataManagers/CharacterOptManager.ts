import { notEmpty, shallowCompareObj } from '@genshin-optimizer/common/util'
import { correctConditionalValue } from '@genshin-optimizer/game-opt/engine'
import type { CharacterKey } from '@genshin-optimizer/zzz/consts'
import type { Dst, Sheet, Src, Tag } from '@genshin-optimizer/zzz/formula'
import {
  getConditional,
  getFormula,
  isMember,
} from '@genshin-optimizer/zzz/formula'
import type { ZzzDatabase } from '../..'
import { DataManager } from '../DataManager'
import { validateTag } from '../tagUtil'

export type CharOpt = {
  targetSheet?: Sheet
  targetName?: string
  conditionals: Array<{
    sheet: Sheet
    src: Src
    dst: Dst
    condKey: string
    condValue: number
  }>
  bonusStats: Array<{
    tag: Tag
    value: number
  }>
  optConfigId?: string
}
export class CharacterOptManager extends DataManager<
  CharacterKey,
  'charOpts',
  CharOpt,
  CharOpt
> {
  constructor(database: ZzzDatabase) {
    super(database, 'charOpts')
  }
  override validate(obj: unknown): CharOpt | undefined {
    if (!obj || typeof obj !== 'object') return undefined
    let { targetName, targetSheet, conditionals, bonusStats, optConfigId } =
      obj as CharOpt
    if (!Array.isArray(conditionals)) conditionals = []
    const hashList: string[] = [] // a hash to ensure sheet:condKey:src:dst is unique
    if (!targetSheet || !targetName || !getFormula(targetSheet, targetName)) {
      targetSheet = undefined
      targetName = undefined
    }
    conditionals = conditionals
      .map(({ sheet, condKey, src, dst, condValue }) => {
        if (!condValue) return undefined //remove conditionals when the value is 0
        if (!isMember(src) || !(dst === null || isMember(dst))) return undefined
        const cond = getConditional(sheet, condKey)
        if (!cond) return undefined

        // validate uniqueness
        const hash = `${sheet}:${condKey}:${src}:${dst}`
        if (hashList.includes(hash)) return undefined
        hashList.push(hash)

        // validate values
        condValue = correctConditionalValue(cond, condValue)

        return {
          sheet,
          src,
          dst,
          condKey,
          condValue,
        }
      })
      .filter(notEmpty)
    if (!Array.isArray(bonusStats)) bonusStats = []
    bonusStats = bonusStats.filter(({ tag, value }) => {
      if (!validateTag(tag)) return false
      if (typeof value !== 'number') return false
      return true
    })

    if (optConfigId && !this.database.optConfigs.keys.includes(optConfigId))
      optConfigId = undefined

    const charOpt: CharOpt = {
      targetName,
      targetSheet,
      conditionals,
      bonusStats,
      optConfigId,
    }
    return charOpt
  }

  // These overrides allow CharacterKey to be used as id.
  // This assumes we only support one copy of a character opt in a DB.
  override toStorageKey(key: string): string {
    return `${this.goKeySingle}_${key}`
  }
  override toCacheKey(key: string): CharacterKey {
    return key.split(`${this.goKeySingle}_`)[1] as CharacterKey
  }
  getOrCreate(key: CharacterKey): CharOpt {
    if (!this.keys.includes(key)) {
      this.set(key, initialCharOpt())
    }
    return this.get(key) as CharOpt
  }
  setConditional(
    charKey: CharacterKey,
    sheet: Sheet,
    condKey: string,
    src: Src,
    dst: Dst,
    condValue: number
  ) {
    this.set(charKey, (charOpt) => {
      const conditionals = [...charOpt.conditionals]
      const condIndex = conditionals.findIndex(
        (c) =>
          c.condKey === condKey &&
          c.sheet === sheet &&
          c.src === src &&
          c.dst === dst
      )
      if (condIndex === -1) {
        conditionals.push({
          sheet,
          src,
          dst,
          condKey,
          condValue,
        })
      } else {
        const cond = conditionals[condIndex]
        // Check if the value is the same, return false to not propagate the update.
        if (
          cond.sheet === sheet &&
          cond.src === src &&
          cond.dst === dst &&
          cond.condKey === condKey &&
          cond.condValue === condValue
        )
          return false
        cond.sheet = sheet
        cond.src = src
        cond.dst = dst
        cond.condKey = condKey
        cond.condValue = condValue
      }
      return { conditionals }
    })
  }
  setBonusStat(
    charKey: CharacterKey,
    tag: Tag,
    value: number | null, // use null to remove the stat
    index?: number // to edit an existing stat
  ) {
    this.set(charKey, (charOpt) => {
      const statIndex =
        index ??
        charOpt.bonusStats.findIndex((s) => shallowCompareObj(s.tag, tag))
      const bonusStats = [...charOpt.bonusStats]
      if (statIndex === -1 && value !== null) {
        bonusStats.push({ tag, value })
      } else if (value === null && statIndex > -1) {
        bonusStats.splice(statIndex, 1)
      } else if (value !== null && statIndex > -1) {
        bonusStats[statIndex].value = value
        bonusStats[statIndex].tag = tag
      }
      return { bonusStats }
    })
  }
}

export function initialCharOpt(): CharOpt {
  return {
    conditionals: [],
    bonusStats: [],
  }
}
