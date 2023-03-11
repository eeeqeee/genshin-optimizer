import type { WeaponData } from '@genshin-optimizer/pipeline'
import { input } from '../../../../Formula'
import {
  constant,
  equal,
  infoMut,
  percent,
  prod,
} from '../../../../Formula/utils'
import type { WeaponKey } from '@genshin-optimizer/consts'
import { customDmgNode } from '../../../Characters/dataUtil'
import { st } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import type { IWeaponSheet } from '../../IWeaponSheet'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'
import data_gen_json from './data_gen.json'

const key: WeaponKey = 'TheFlute'
const data_gen = data_gen_json as WeaponData

const dmg_ = equal(
  input.weapon.key,
  key,
  customDmgNode(prod(percent(2), input.premod.atk), 'elemental', {
    hit: { ele: constant('physical') },
  })
)

const data = dataObjForWeaponSheet(key, data_gen, undefined, {
  dmg_,
})
const sheet: IWeaponSheet = {
  document: [
    {
      header: headerTemplate(key, st('base')),
      fields: [{ node: infoMut(dmg_, { name: st('dmg') }) }],
    },
  ],
}
export default new WeaponSheet(key, sheet, data_gen, data)
