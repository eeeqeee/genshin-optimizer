import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'
import { input, subscript } from '@genshin-optimizer/gi/wr'
import { st } from '../../../SheetUtil'
import type { IWeaponSheet } from '../../IWeaponSheet'
import WeaponSheet, { headerTemplate } from '../../WeaponSheet'
import { dataObjForWeaponSheet } from '../../util'

const key: WeaponKey = 'SharpshootersOath'
const data_gen = allStats.weapon.data[key]

const weakspotDMG_s = [-1, 0.24, 0.3, 0.36, 0.42, 0.48]
const weakspotDMG_ = subscript(input.weapon.refinement, weakspotDMG_s)

const data = dataObjForWeaponSheet(key, data_gen, {
  premod: {
    weakspotDMG_,
  },
})

const sheet: IWeaponSheet = {
  document: [
    {
      header: headerTemplate(key, st('base')),
      fields: [
        {
          node: weakspotDMG_,
        },
      ],
    },
  ],
}
export default new WeaponSheet(key, sheet, data_gen, data)
