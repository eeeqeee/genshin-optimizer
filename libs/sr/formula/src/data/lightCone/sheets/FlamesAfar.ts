import { cmpGE, prod, subscript } from '@genshin-optimizer/pando/engine'
import type { LightConeKey } from '@genshin-optimizer/sr/consts'
import { allStats, mappedStats } from '@genshin-optimizer/sr/stats'
import {
  allBoolConditionals,
  customHeal,
  own,
  ownBuff,
  percent,
  registerBuff,
} from '../../util'
import { entriesForLightCone, registerLightCone } from '../util'

const key: LightConeKey = 'FlamesAfar'
const data_gen = allStats.lightCone[key]
const dm = mappedStats.lightCone[key]
const lcCount = own.common.count.sheet(key)
const { superimpose } = own.lightCone

const { hpConsumed } = allBoolConditionals(key)

const sheet = registerLightCone(
  key,
  // Handles base stats and passive buffs
  entriesForLightCone(key, data_gen),

  customHeal(
    'healing',
    cmpGE(lcCount, 1, prod(own.final.hp, percent(dm.heal))),
    {
      cond: cmpGE(lcCount, 1, 'infer', ''),
    }
  ),

  // Conditional buffs
  registerBuff(
    'common_dmg_',
    ownBuff.premod.common_dmg_.add(
      cmpGE(lcCount, 1, hpConsumed.ifOn(subscript(superimpose, dm.common_dmg_)))
    ),
    cmpGE(lcCount, 1, 'infer', '')
  )
)
export default sheet
