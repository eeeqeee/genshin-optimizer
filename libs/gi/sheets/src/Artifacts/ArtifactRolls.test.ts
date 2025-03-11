import { extrapolateFloat } from '@genshin-optimizer/common/pipeline'
import type { SubstatKey } from '@genshin-optimizer/gi/consts'
import { allStats } from '@genshin-optimizer/gi/stats'

/**
 * Known rarity-5 rolls
 * (Most) Data from Arkifix#2254
 * https://discord.com/channels/785153694478893126/795544823804198922/879868973334790154
 */
const rolls: Record<SubstatKey, [string, ...number[]][]> = {
  critRate_: [
    ['2.7', 0],
    ['3.1', 1],
    ['3.5', 2],
    ['3.9', 3],

    ['5.4', 0, 0],
    ['5.8', 1, 0],
    ['6.2', 2, 0],
    ['6.6', 3, 0],
    ['6.2', 1, 1],
    ['6.6', 2, 1],
    ['7.0', 3, 1],
    ['7.0', 2, 2],
    ['7.4', 3, 2],
    ['7.8', 3, 3],

    ['8.2', 0, 0, 0],
    ['8.6', 1, 0, 0],
    ['8.9', 1, 1, 0],
    ['8.9', 2, 0, 0],
    ['9.3', 2, 1, 0],
    ['9.3', 3, 0, 0],
    ['9.7', 2, 2, 0],
    ['9.7', 3, 1, 0],
    ['10.1', 3, 2, 0],
    ['10.5', 3, 3, 0],
    ['9.3', 1, 1, 1],
    ['9.7', 2, 1, 1],
    ['10.1', 2, 2, 1],
    ['10.1', 3, 1, 1],
    ['10.5', 3, 2, 1],
    ['10.9', 3, 3, 1],
    ['10.5', 2, 2, 2],
    ['10.9', 3, 2, 2],
    ['11.3', 3, 3, 2],
    ['11.7', 3, 3, 3],

    ['10.9', 0, 0, 0, 0],
    ['11.3', 1, 0, 0, 0],
    ['11.7', 1, 1, 0, 0],
    ['11.7', 2, 0, 0, 0],
    ['12.1', 1, 1, 1, 0],
    ['12.1', 2, 1, 0, 0],
    ['12.1', 3, 0, 0, 0],
    ['12.4', 2, 1, 1, 0],
    ['12.4', 3, 1, 0, 0],
    ['12.8', 3, 2, 0, 0],
    ['13.2', 2, 2, 2, 0],
    ['13.2', 3, 2, 1, 0],
    ['13.6', 3, 2, 2, 0],
    ['13.6', 3, 3, 1, 0],
    ['14.0', 3, 3, 2, 0],
    ['13.2', 2, 2, 1, 1],
    ['13.6', 3, 2, 1, 1],
    ['14.0', 3, 2, 2, 1],
    ['14.0', 3, 3, 1, 1],
    ['14.4', 3, 3, 2, 1],
    ['14.4', 3, 2, 2, 2],
    ['14.8', 3, 3, 2, 2],

    ['15.2', 1, 1, 1, 1, 0],
    ['15.6', 3, 1, 1, 0, 0],
    ['15.9', 3, 2, 1, 0, 0],
    ['16.3', 3, 3, 1, 0, 0],
    ['16.7', 3, 3, 2, 0, 0],
    ['17.1', 3, 3, 2, 1, 0],
    ['17.1', 3, 2, 2, 1, 1],
    ['17.5', 3, 3, 2, 1, 1],
    ['17.9', 3, 3, 2, 2, 1],
  ],
  critDMG_: [
    ['5.4', 0],
    ['6.2', 1],
    ['7.0', 2],
    ['7.8', 3],

    ['10.9', 0, 0],
    ['11.7', 1, 0],
    ['12.4', 2, 0],
    ['13.2', 3, 0],
    ['12.4', 1, 1],
    ['13.2', 2, 1],
    ['14.0', 3, 1],
    ['14.0', 2, 2],
    ['14.8', 3, 2],
    ['15.5', 3, 3],

    ['16.3', 0, 0, 0],
    ['17.1', 1, 0, 0],
    ['17.9', 1, 1, 0],
    ['17.9', 2, 0, 0],
    ['18.7', 2, 1, 0],
    ['18.7', 3, 0, 0],
    ['19.4', 2, 2, 0],
    ['19.4', 3, 1, 0],
    ['20.2', 3, 2, 0],
    ['21.0', 3, 3, 0],
    ['18.7', 1, 1, 1],
    ['19.4', 2, 1, 1],
    ['20.2', 2, 2, 1],
    ['20.2', 3, 1, 1],
    ['21.0', 3, 2, 1],
    ['21.8', 3, 3, 1],
    ['21.0', 2, 2, 2],
    ['21.8', 3, 2, 2],
    ['22.5', 3, 3, 2],
    ['23.3', 3, 3, 3],

    ['22.5', 1, 0, 0, 0],
    ['23.3', 1, 1, 0, 0],
    ['23.3', 2, 0, 0, 0],
    ['24.1', 2, 1, 0, 0],
    ['24.1', 3, 0, 0, 0],
    ['24.9', 2, 1, 1, 0],
    ['24.9', 2, 2, 0, 0],
    ['24.9', 3, 1, 0, 0],
    ['25.6', 2, 2, 1, 0],
    ['25.7', 3, 1, 1, 0],
    ['25.6', 3, 2, 0, 0],
    ['26.4', 2, 2, 2, 0],
    ['26.4', 3, 2, 1, 0],
    ['26.4', 3, 3, 0, 0],
    ['27.2', 3, 2, 2, 0],
    ['27.2', 3, 3, 1, 0],
    ['28.0', 3, 3, 2, 0],
    ['28.8', 3, 3, 3, 0],
    ['25.7', 2, 1, 1, 1],
    ['26.4', 2, 2, 1, 1],
    ['26.4', 3, 1, 1, 1],
    ['27.2', 2, 2, 2, 1],
    ['27.2', 3, 2, 1, 1],
    ['28.0', 3, 2, 2, 1],
    ['28.0', 3, 3, 1, 1],
    ['28.8', 3, 3, 2, 1],
    ['29.5', 3, 3, 3, 1],
    ['28.0', 2, 2, 2, 2],
    ['28.7', 3, 2, 2, 2],
    ['29.5', 3, 3, 2, 2],
    ['30.3', 3, 3, 3, 2],
    ['31.1', 3, 3, 3, 3],

    ['30.3', 2, 1, 1, 0, 0],
    ['30.3', 3, 1, 0, 0, 0],
    ['31.1', 2, 2, 1, 0, 0],
    ['31.1', 3, 1, 1, 0, 0],
    ['31.1', 3, 2, 0, 0, 0],
    ['31.9', 2, 2, 1, 1, 0],
    ['31.9', 3, 2, 1, 0, 0],
    ['32.6', 2, 2, 2, 1, 0],
    ['32.6', 3, 2, 1, 1, 0],
    ['33.4', 3, 2, 2, 1, 0],
    ['33.4', 3, 3, 1, 1, 0],
    ['33.4', 3, 3, 2, 0, 0],
    ['34.2', 3, 3, 2, 1, 0],
    ['34.2', 3, 3, 3, 0, 0],
    ['35.0', 3, 3, 2, 2, 0],
    ['35.0', 3, 3, 3, 1, 0],
    ['32.7', 3, 1, 1, 1, 1],
    ['35.0', 3, 2, 2, 2, 1],
    ['35.0', 3, 3, 2, 1, 1],
    ['35.7', 3, 3, 2, 2, 1],
    ['35.8', 3, 3, 3, 1, 1],
    ['36.5', 3, 3, 2, 2, 2],
    ['37.3', 3, 3, 3, 2, 2],
    ['38.1', 3, 3, 3, 3, 2],

    ['38.1', 3, 2, 1, 1, 0, 0],
    ['39.6', 2, 2, 2, 2, 1, 0],
    ['45.8', 3, 3, 3, 3, 3, 2],
  ],
  enerRech_: [
    ['4.5', 0],
    ['5.2', 1],
    ['5.8', 2],
    ['6.5', 3],

    ['9.1', 0, 0],
    ['9.7', 1, 0],
    ['10.4', 2, 0],
    ['11.0', 3, 0],
    ['10.4', 1, 1],
    ['11.0', 2, 1],
    ['11.7', 3, 1],
    ['11.7', 2, 2],
    ['12.3', 3, 2],
    ['13.0', 3, 3],

    ['13.6', 0, 0, 0],
    ['14.2', 1, 0, 0],
    ['14.9', 2, 0, 0],
    ['15.5', 2, 1, 0],
    ['15.5', 3, 0, 0],
    ['16.2', 3, 1, 0],
    ['16.8', 3, 2, 0],
    ['17.5', 3, 3, 0],
    ['16.8', 2, 2, 1],
    ['17.5', 3, 2, 1],
    ['17.5', 2, 2, 2],
    ['18.1', 3, 2, 2],
    ['18.8', 3, 3, 2],

    ['18.1', 0, 0, 0, 0],
    ['20.1', 3, 0, 0, 0],
    ['22.0', 2, 2, 2, 0],
    ['24.6', 3, 3, 2, 2],

    ['27.2', 2, 2, 2, 1, 0],
    ['30.5', 3, 3, 2, 2, 2],
  ],
  def_: [
    ['5.1', 0],
    ['5.8', 1],
    ['6.6', 2],
    ['7.3', 3],

    ['10.2', 0, 0],
    ['10.9', 1, 0],
    ['11.7', 2, 0],
    ['12.4', 3, 0],
    ['11.7', 1, 1],
    ['12.4', 2, 1],
    ['13.1', 3, 1],
    ['13.1', 2, 2],
    ['13.9', 3, 2],
    ['14.6', 3, 3],

    ['15.3', 0, 0, 0],
    ['16.0', 1, 0, 0],
    ['16.8', 1, 1, 0],
    ['16.8', 2, 0, 0],
    ['17.5', 2, 1, 0],
    ['17.5', 3, 0, 0],
    ['18.2', 2, 2, 0],
    ['18.2', 3, 1, 0],
    ['19.0', 3, 2, 0],
    ['19.7', 3, 3, 0],
    ['17.5', 1, 1, 1],
    ['18.2', 2, 1, 1],
    ['19.0', 2, 2, 1],
    ['19.0', 3, 1, 1],
    ['19.7', 3, 2, 1],
    ['20.4', 3, 3, 1],
    ['20.4', 3, 2, 2],
    ['21.1', 3, 3, 2],
    ['21.9', 3, 3, 3],

    ['21.1', 1, 0, 0, 0],
    ['22.6', 2, 1, 0, 0],
    ['24.1', 2, 2, 1, 0],
    ['24.1', 3, 1, 1, 0],
    ['24.1', 3, 2, 0, 0],
    ['24.8', 3, 3, 0, 0],
    ['25.5', 3, 2, 2, 0],
    ['25.5', 3, 3, 1, 0],
    ['26.2', 3, 3, 2, 0],
    ['27.0', 3, 3, 3, 0],
    ['26.2', 3, 3, 1, 1],
    ['27.0', 3, 3, 2, 1],
    ['27.7', 3, 3, 2, 2],
    ['29.2', 3, 3, 3, 3],

    ['28.4', 2, 1, 1, 0, 0],
    ['29.2', 2, 2, 1, 0, 0],
  ],
  def: [
    ['16', 0],
    ['19', 1],
    ['21', 2],
    ['23', 3],

    ['32', 0, 0],
    ['35', 1, 0],
    ['37', 2, 0],
    ['39', 3, 0],
    ['37', 1, 1],
    ['39', 2, 1],
    ['42', 3, 1],
    ['42', 2, 2],
    ['44', 3, 2],
    ['46', 3, 3],

    ['49', 0, 0, 0],
    ['51', 1, 0, 0],
    ['53', 1, 1, 0],
    ['53', 2, 0, 0],
    ['56', 2, 1, 0],
    ['56', 3, 0, 0],
    ['58', 2, 2, 0],
    ['58', 3, 1, 0],
    ['60', 3, 2, 0],
    ['63', 3, 3, 0],
    ['56', 1, 1, 1],
    ['58', 2, 1, 1],
    ['60', 2, 2, 1],
    ['60', 3, 1, 1],
    ['63', 3, 2, 1],
    ['65', 3, 3, 1],
    ['62', 2, 2, 2],
    ['65', 3, 2, 2],
    ['67', 3, 3, 2],
    ['69', 3, 3, 3],

    ['69', 1, 1, 0, 0],
    ['72', 3, 0, 0, 0],
    ['74', 3, 1, 0, 0],
    ['76', 2, 2, 1, 0],
    ['79', 3, 2, 1, 0],
    ['81', 3, 2, 2, 0],
    ['81', 3, 3, 1, 0],
    ['83', 3, 3, 2, 0],
    ['86', 3, 3, 3, 0],
    ['79', 2, 2, 1, 1],
    ['81', 3, 2, 1, 1],
    ['86', 3, 3, 2, 1],
    ['86', 3, 2, 2, 2],
    ['90', 3, 3, 3, 2],

    ['97', 3, 2, 1, 1, 0],
    ['97', 2, 2, 1, 1, 1],
  ],
  atk_: [], // Same as hp_
  hp_: [
    ['4.1', 0],
    ['4.7', 1],
    ['5.3', 2],
    ['5.8', 3],

    ['8.2', 0, 0],
    ['8.7', 1, 0],
    ['9.3', 2, 0],
    ['9.9', 3, 0],
    ['9.3', 1, 1],
    ['9.9', 2, 1],
    ['10.5', 3, 1],
    ['10.5', 2, 2],
    ['11.1', 3, 2],
    ['11.7', 3, 3],

    ['12.2', 0, 0, 0],
    ['12.8', 1, 0, 0],
    ['13.4', 1, 1, 0],
    ['13.4', 2, 0, 0],
    ['14.0', 2, 1, 0],
    ['14.0', 3, 0, 0],
    ['14.6', 2, 2, 0],
    ['14.6', 3, 1, 0],
    ['15.2', 3, 2, 0],
    ['15.7', 3, 3, 0],
    ['14.6', 2, 1, 1],
    ['15.2', 2, 2, 1],
    ['15.2', 3, 1, 1],
    ['15.7', 3, 2, 1],
    ['16.3', 3, 3, 1],
    ['15.8', 2, 2, 2],
    ['16.3', 3, 2, 2],
    ['16.9', 3, 3, 2],
    ['17.5', 3, 3, 3],

    ['17.5', 2, 0, 0, 0],
    ['18.1', 2, 1, 0, 0],
    ['18.7', 2, 1, 1, 0],
    ['18.7', 3, 1, 0, 0],
    ['19.2', 3, 1, 1, 0],
    ['19.8', 3, 2, 1, 0],
    ['20.4', 3, 2, 2, 0],
    ['20.4', 3, 3, 1, 0],
    ['21.0', 3, 3, 2, 0],
    ['19.8', 2, 2, 1, 1],
    ['22.2', 3, 3, 2, 2],

    ['23.3', 3, 2, 0, 0, 0],
    ['23.9', 2, 2, 1, 1, 0],
    ['25.7', 3, 3, 2, 1, 0],

    // Thanks to Ayrua#8878 for reporting this edge case and Algoinde#5495 for extracting the rolls
    ['26.3', 2, 2, 2, 2, 2],
  ],
  atk: [
    ['14', 0],
    ['16', 1],
    ['18', 2],
    ['19', 3],

    ['27', 0, 0],
    ['29', 1, 0],
    ['31', 2, 0],
    ['33', 3, 0],
    ['31', 1, 1],
    ['33', 2, 1],
    ['35', 3, 1],
    ['35', 2, 2],
    ['37', 3, 2],
    ['39', 3, 3],

    ['41', 0, 0, 0],
    ['43', 1, 0, 0],
    ['45', 1, 1, 0],
    ['45', 2, 0, 0],
    ['47', 2, 1, 0],
    ['47', 3, 0, 0],
    ['49', 2, 2, 0],
    ['49', 3, 1, 0],
    ['53', 3, 3, 0],
    ['49', 2, 1, 1],
    ['51', 2, 2, 1],
    ['51', 3, 1, 1],
    ['53', 3, 2, 1],
    ['54', 3, 3, 1],
    ['56', 3, 3, 2],
    ['58', 3, 3, 3],

    ['66', 3, 2, 1, 0],
    ['68', 3, 3, 1, 0],
  ],
  hp: [
    ['209', 0],
    ['239', 1],
    ['269', 2],
    ['299', 3],

    ['418', 0, 0],
    ['448', 1, 0],
    ['478', 2, 0],
    ['508', 3, 0],
    ['478', 1, 1],
    ['508', 2, 1],
    ['538', 3, 1],
    ['538', 2, 2],
    ['568', 3, 2],
    ['598', 3, 3],

    ['657', 1, 0, 0],
    ['687', 2, 0, 0],
    ['717', 2, 1, 0],
    ['717', 3, 0, 0],
    ['747', 2, 2, 0],
    ['747', 3, 1, 0],
    ['777', 3, 2, 0],
    ['807', 3, 3, 0],
    ['747', 2, 1, 1],
    ['777', 2, 2, 1],
    ['777', 3, 1, 1],
    ['807', 3, 2, 1],
    ['837', 3, 3, 1],
    ['837', 3, 2, 2],
    ['866', 3, 3, 2],

    ['926', 2, 1, 0, 0],
    ['956', 3, 1, 0, 0],
    ['986', 3, 1, 1, 0],
    ['986', 3, 2, 0, 0],
    ['1016', 3, 2, 1, 0],
    ['1016', 3, 3, 0, 0],
    ['1046', 3, 2, 2, 0],
    ['1076', 3, 3, 2, 0],
    ['1105', 3, 3, 2, 1],
    ['1135', 3, 3, 3, 1],
  ],
  eleMas: [
    ['16', 0],
    ['19', 1],
    ['21', 2],
    ['23', 3],

    ['33', 0, 0],
    ['35', 1, 0],
    ['37', 2, 0],
    ['40', 3, 0],
    ['37', 1, 1],
    ['40', 2, 1],
    ['42', 3, 1],
    ['42', 2, 2],
    ['44', 3, 2],
    ['47', 3, 3],

    ['51', 1, 0, 0],
    ['54', 1, 1, 0],
    ['54', 2, 0, 0],
    ['56', 2, 1, 0],
    ['56', 3, 0, 0],
    ['58', 3, 1, 0],
    ['61', 3, 2, 0],
    ['63', 3, 3, 0],
    ['58', 2, 1, 1],
    ['61', 2, 2, 1],
    ['61', 3, 1, 1],
    ['63', 3, 2, 1],
    ['65', 3, 2, 2],
    ['68', 3, 3, 2],
    ['70', 3, 3, 3],

    ['72', 2, 1, 0, 0],
    ['75', 2, 1, 1, 0],
    ['75', 2, 2, 0, 0],
    ['75', 3, 1, 0, 0],
    ['82', 3, 2, 2, 0],
    ['82', 3, 3, 1, 0],
    ['79', 3, 1, 1, 1],
    ['82', 2, 2, 2, 1],
    ['82', 3, 2, 1, 1],
    ['84', 3, 2, 2, 1],
    ['86', 3, 3, 2, 1],
    ['89', 3, 3, 3, 1],
    ['91', 3, 3, 3, 2],

    ['96', 3, 2, 1, 0, 0],
    ['105', 3, 3, 3, 1, 0],
    ['100', 3, 2, 1, 1, 1],
    ['103', 2, 2, 2, 2, 1],

    ['121', 3, 2, 2, 1, 1, 1],
  ],
}
// https://oeis.org/A123400
const ehrlich = [
  1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 4, 3, 1,
  3, 1, 3, 2, 1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 4, 2, 3, 2, 3,
  2, 1, 3, 2, 3, 2, 3, 1, 2, 3, 2, 3, 2, 1, 3, 2, 3, 2, 3, 4, 1, 2, 1, 2, 1, 3,
  2, 1, 2, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 4, 3, 1, 3, 1, 3, 2, 1, 3,
  1, 3, 1, 2, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 5, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4,
  2, 3, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 1, 3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 2,
  3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 1, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 4, 2, 3,
  2, 3, 2, 4, 3, 2, 3, 2, 3, 1, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 3, 4, 2, 4, 2,
  4, 3, 2, 4, 2, 4, 2, 1, 3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 2, 3, 4, 3, 4, 3, 2,
  4, 3, 4, 3, 4, 5, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 1,
  2, 1, 2, 4, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3,
  1, 4, 2, 3, 2, 3, 2, 1, 3, 2, 3, 2, 3, 1, 2, 3, 2, 3, 2, 1, 3, 2, 3, 2, 3, 4,
  1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 4, 3, 1,
  3, 1, 3, 2, 1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 5, 4, 2, 4, 2,
  4, 3, 2, 4, 2, 4, 2, 3, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 1, 3, 4, 3, 4, 3, 2,
  4, 3, 4, 3, 4, 2, 3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 1, 2, 3, 2, 3, 2, 4, 3, 2,
  3, 2, 3, 4, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 1, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4,
  2, 3, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 1, 3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 2,
  3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 5, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 3, 1, 2,
  1, 2, 1, 3, 2, 1, 2, 1, 2, 4, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 2, 3, 1, 3, 1,
  3, 2, 1, 3, 1, 3, 1, 4, 2, 3, 2, 3, 2, 1, 3, 2, 3, 2, 3, 1, 2, 3, 2, 3, 2, 1,
  3, 2, 3, 2, 3, 4, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 2, 3, 1, 2, 1, 2, 1, 3, 2, 1,
  2, 1, 2, 4, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3, 1, 2, 3, 1, 3, 1, 3, 2, 1, 3, 1, 3,
  1, 5, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 3, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 1,
  3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 2, 3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 1, 2, 3,
  2, 3, 2, 4, 3, 2, 3, 2, 3, 4, 2, 3, 2, 3, 2, 4, 3, 2, 3, 2, 3, 1, 4, 2, 4, 2,
  4, 3, 2, 4, 2, 4, 2, 3, 4, 2, 4, 2, 4, 3, 2, 4, 2, 4, 2, 1, 3, 4, 3, 4, 3, 2,
  4, 3, 4, 3, 4, 2, 3, 4, 3, 4, 3, 2, 4, 3, 4, 3, 4, 6, 5,
]

/** Whether `callback` returns `true` for some permutations of `indices` */
function somePerm(
  indices: number[],
  callback: (current: number[]) => boolean
): boolean {
  const base = [...indices]
  const count = indices.reduce((a, _, i) => a * (i + 1), 1)
  if (count > ehrlich.length) throw new Error(`Permutation too large`)

  for (let i = 0; i < count; i++) {
    if (callback(base)) return true

    const x = ehrlich[i],
      tmp = base[x]
    base[x] = base[0]
    base[0] = tmp
  }
  return false
}

describe('Artifact Roll Model', () => {
  for (const [key, entries] of Object.entries(rolls)) {
    const rolls = allStats.art.sub[5][key]

    type Model = (indices: number[]) => string

    // TODO: Reduce these feasible models down to only one
    const model1: Model = (indices) => {
      if (key.endsWith('_')) {
        const theoretical = indices.reduce(
          (a, b) => Math.fround(a + Math.fround(Math.fround(rolls[b]) * 100)),
          0
        )
        return (
          Math.round(extrapolateFloat(Math.fround(theoretical * 10))) / 10
        ).toFixed(1)
      } else {
        const theoretical = indices.reduce((a, b) => a + rolls[b], 0)
        return Math.round(theoretical).toFixed(0)
      }
    }
    const model2: Model = (indices) => {
      if (key.endsWith('_')) {
        const theoretical = indices.reduce(
          (a, b) => Math.fround(a + Math.fround(Math.fround(rolls[b]) * 100)),
          0
        )
        return (Math.round(Math.fround(theoretical * 10)) / 10).toFixed(1)
      } else {
        const theoretical = indices.reduce((a, b) => a + rolls[b], 0)
        return Math.round(theoretical).toFixed(0)
      }
    }

    for (const [string, ...values] of entries) {
      const v = values.map((i) => rolls[i])
      test(`Current system should validate ${string} ${key}`, () => {
        expect(Object.keys(allStats.art.subRoll[5][key])).toContain(string)
      })
      it(`should support ${string} ${key} with rolls [${v}] (sum to ${v.reduce(
        (a, b) => a + b
      )})`, () => {
        expect(somePerm(values, (i) => model1(i) === string)).toBeTruthy()
        expect(somePerm(values, (i) => model2(i) === string)).toBeTruthy()
      })
    }
  }
})
