import type { LightConeKey } from '@genshin-optimizer/sr/consts'
import { allStats } from '../../../allStats'

const key: LightConeKey = 'Mediation'
const data_gen = allStats.lightCone[key]

let o = 0

const dm = {
  spd: data_gen.superimpose.otherStats[o++],
  duration: data_gen.superimpose.otherStats[o++][1],
} as const

export default dm
