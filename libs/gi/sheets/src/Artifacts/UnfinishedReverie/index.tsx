import { objKeyMap, range } from '@genshin-optimizer/common/util'
import type { ArtifactSetKey } from '@genshin-optimizer/gi/consts'
import type { Data } from '@genshin-optimizer/gi/wr'
import {
  constant,
  greaterEq,
  input,
  lookup,
  naught,
  percent,
  prod,
} from '@genshin-optimizer/gi/wr'
import { cond, st } from '../../SheetUtil'
import { ArtifactSheet, setHeaderTemplate } from '../ArtifactSheet'
import type { SetEffectSheet } from '../IArtifactSheet'
import { dataObjForArtifactSheet } from '../dataUtil'

const key: ArtifactSetKey = 'UnfinishedReverie'
const setHeader = setHeaderTemplate(key)

const set2 = greaterEq(input.artSet.UnfinishedReverie, 2, 0.18)

const set4Arr = range(1, 5)
const [condStacksPath, condStacks] = cond(key, 'stacks')
const set4 = greaterEq(
  input.artSet.UnfinishedReverie,
  4,
  prod(
    percent(0.1),
    lookup(
      condStacks,
      objKeyMap(set4Arr, (stacks) => constant(stacks)),
      naught,
    ),
  ),
)

export const data: Data = dataObjForArtifactSheet(key, {
  premod: {
    atk_: set2,
    all_dmg_: set4,
  },
})

const sheet: SetEffectSheet = {
  2: { document: [{ header: setHeader(2), fields: [{ node: set2 }] }] },
  4: {
    document: [
      {
        header: setHeader(4),
        value: condStacks,
        path: condStacksPath,
        name: st('stacks'),
        states: objKeyMap(set4Arr, (stacks) => ({
          name: `${stacks}`,
          fields: [
            {
              node: set4,
            },
          ],
        })),
      },
    ],
  },
}
export default new ArtifactSheet(sheet, data)
