import type { CharacterKey, GenderKey } from '@genshin-optimizer/gi/consts'
import { charKeyToLocGenderedCharKey } from '@genshin-optimizer/gi/consts'
import TravelerM from './splash_aether.png'
import Albedo from './splash_albedo.png'
import Alhaitham from './splash_alhaitham.png'
import Amber from './splash_amber.png'
import Arlecchino from './splash_arlecchino.png'
import KamisatoAyaka from './splash_ayaka.png'
import KamisatoAyato from './splash_ayato.png'
import Baizhu from './splash_baizhu.png'
import Barbara from './splash_barbara.png'
import Beidou from './splash_beidou.png'
import Bennett from './splash_bennett.png'
import Candace from './splash_candace.png'
import Charlotte from './splash_charlotte.png'
import Chasca from './splash_chasca.png'
import Chevreuse from './splash_chevreuse.png'
import Chiori from './splash_chiori.png'
import Chongyun from './splash_chongyun.png'
import Citlali from './splash_citlali.png'
import Clorinde from './splash_clorinde.png'
import Collei from './splash_collei.png'
import Cyno from './splash_cyno.png'
import Dehya from './splash_dehya.png'
import Diluc from './splash_diluc.png'
import Diona from './splash_diona.png'
import Dori from './splash_dori.png'
import Emilie from './splash_emilie.png'
import Eula from './splash_eula.png'
import Faruzan from './splash_faruzan.png'
import Fischl from './splash_fischl.png'
import Freminet from './splash_freminet.png'
import Furina from './splash_furina.png'
import Gaming from './splash_gaming.png'
import Ganyu from './splash_ganyu.png'
import Gorou from './splash_gorou.png'
import ShikanoinHeizou from './splash_heizou.png'
import HuTao from './splash_hutao.png'
import AratakiItto from './splash_itto.png'
import Jean from './splash_jean.png'
import Kachina from './splash_kachina.png'
import Kaeya from './splash_kaeya.png'
import Kaveh from './splash_kaveh.png'
import KaedeharaKazuha from './splash_kazuha.png'
import Keqing from './splash_keqing.png'
import Kinich from './splash_kinich.png'
import Kirara from './splash_kirara.png'
import Klee from './splash_klee.png'
import SangonomiyaKokomi from './splash_kokomi.png'
import KukiShinobu from './splash_kuki.png'
import LanYan from './splash_lanyan.png'
import Layla from './splash_layla.png'
import Lisa from './splash_lisa.png'
import TravelerF from './splash_lumine.png'
import Lynette from './splash_lynette.png'
import Lyney from './splash_lyney.png'
import Mavuika from './splash_mavuika.png'
import Mika from './splash_mika.png'
import Mona from './splash_mona.png'
import Mualani from './splash_mualani.png'
import Nahida from './splash_nahida.png'
import Navia from './splash_navia.png'
import Neuvillette from './splash_neuvillette.png'
import Nilou from './splash_nilou.png'
import Ningguang from './splash_ningguang.png'
import Noelle from './splash_noelle.png'
import Ororon from './splash_ororon.png'
import Qiqi from './splash_qiqi.png'
import RaidenShogun from './splash_raiden.png'
import Razor from './splash_razor.png'
import Rosaria from './splash_rosaria.png'
import KujouSara from './splash_sara.png'
import Sayu from './splash_sayu.png'
import Sethos from './splash_sethos.png'
import Shenhe from './splash_shenhe.png'
import Sigewinne from './splash_sigewinne.png'
import Sucrose from './splash_sucrose.png'
import Tartaglia from './splash_tartaglia.png'
import Thoma from './splash_thoma.png'
import Tighnari from './splash_tighnari.png'
import Venti from './splash_venti.png'
import Wanderer from './splash_wanderer.png'
import Wriothesley from './splash_wriothesley.png'
import Xiangling from './splash_xiangling.png'
import Xianyun from './splash_xianyun.png'
import Xiao from './splash_xiao.png'
import Xilonen from './splash_xilonen.png'
import Xingqiu from './splash_xingqiu.png'
import Xinyan from './splash_xinyan.png'
import YaeMiko from './splash_yae.png'
import Yanfei from './splash_yanfei.png'
import Yaoyao from './splash_yaoyao.png'
import Yelan from './splash_yelan.png'
import Yoimiya from './splash_yoimiya.png'
import YunJin from './splash_yunjin.png'
import Zhongli from './splash_zhongli.png'

const charCards = {
  Albedo,
  Alhaitham,
  Amber,
  Arlecchino,
  AratakiItto,
  Baizhu,
  Barbara,
  Beidou,
  Bennett,
  Candace,
  Charlotte,
  Chasca,
  Chevreuse,
  Chiori,
  Chongyun,
  Citlali,
  Clorinde,
  Collei,
  Cyno,
  Dehya,
  Diluc,
  Diona,
  Dori,
  Emilie,
  Eula,
  Faruzan,
  Fischl,
  Freminet,
  Furina,
  Ganyu,
  Gaming,
  Gorou,
  HuTao,
  Jean,
  Kachina,
  KaedeharaKazuha,
  Kaeya,
  Kaveh,
  KamisatoAyaka,
  KamisatoAyato,
  Keqing,
  Kinich,
  Kirara,
  Klee,
  KujouSara,
  KukiShinobu,
  LanYan,
  Layla,
  Lisa,
  Lynette,
  Lyney,
  Mavuika,
  Mika,
  Mona,
  Mualani,
  Nahida,
  Navia,
  Neuvillette,
  Nilou,
  Ningguang,
  Noelle,
  Ororon,
  Qiqi,
  RaidenShogun,
  Razor,
  Rosaria,
  SangonomiyaKokomi,
  Sayu,
  Sethos,
  Shenhe,
  ShikanoinHeizou,
  Sigewinne,
  Sucrose,
  Tartaglia,
  Thoma,
  Tighnari,
  TravelerF,
  TravelerM,
  Venti,
  Wanderer,
  Wriothesley,
  Xiangling,
  Xianyun,
  Xiao,
  Xilonen,
  Xingqiu,
  Xinyan,
  YaeMiko,
  Yanfei,
  Yaoyao,
  Yelan,
  Yoimiya,
  YunJin,
  Zhongli,
} as const

export function splash(charKey: CharacterKey, gender: GenderKey) {
  return charCards[
    charKeyToLocGenderedCharKey(charKey, gender) as keyof typeof charCards
  ]
}
