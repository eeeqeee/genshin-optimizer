import {
  allCharacterKeys,
  allDiscSetKeys,
  allWengineKeys,
} from '@genshin-optimizer/zzz/consts'
import type { Tree } from '@nx/devkit'
import { workspaceRoot } from '@nx/devkit'
import { writeFileSync } from 'fs'
import * as prettier from 'prettier'

export default async function genIndex(tree: Tree, sheet_type: string) {
  const file_location = `${workspaceRoot}/libs/zzz/formula-ui/src/${sheet_type}/sheets/index.ts`
  switch (sheet_type) {
    case 'char':
      await writeCharIndex(file_location)
      break
    case 'disc':
      await writeDiscIndex(file_location)
      break
    case 'wengine':
      await writeWengineIndex(file_location)
      break
  }
}

async function writeCharIndex(path: string) {
  const prettierRc = await prettier.resolveConfig(path)
  const index = await prettier.format(
    `
// WARNING: Generated file, do not modify
import type { UISheet } from '@genshin-optimizer/game-opt/sheet-ui'
import type { CharacterKey } from '@genshin-optimizer/zzz/consts'
import type { TalentSheetElementKey } from '../consts'
${allCharacterKeys
  .map((charKey) => `import ${charKey} from './${charKey}'`)
  .join('\n')}

export const uiSheets: Record<
  CharacterKey,
  UISheet<TalentSheetElementKey>
> = {
  ${allCharacterKeys.join('\n,  ')}
} as const
  `,
    { ...prettierRc, parser: 'typescript' },
  )
  writeFileSync(path, index)
}

async function writeDiscIndex(path: string) {
  const prettierRc = await prettier.resolveConfig(path)
  const index = await prettier.format(
    `
// WARNING: Generated file, do not modify
import type { UISheet } from '@genshin-optimizer/game-opt/sheet-ui'
import type { DiscSetKey } from '@genshin-optimizer/zzz/consts'
${allDiscSetKeys
  .map((setKey) => `import ${setKey} from './${setKey}'`)
  .join('\n')}

export const discUiSheets: Record<DiscSetKey, UISheet<'2' | '4'>> = {
  ${allDiscSetKeys.join('\n,  ')}
}
  `,
    { ...prettierRc, parser: 'typescript' },
  )
  writeFileSync(path, index)
}

async function writeWengineIndex(path: string) {
  const prettierRc = await prettier.resolveConfig(path)
  const index = await prettier.format(
    `
// WARNING: Generated file, do not modify
import type { UISheetElement } from '@genshin-optimizer/game-opt/sheet-ui'
import type { WengineKey } from '@genshin-optimizer/zzz/consts'

${allWengineKeys.map((wkey) => `import ${wkey} from './${wkey}'`).join('\n')}

export const wengineUiSheets: Record<WengineKey, UISheetElement> =
  {
    ${allWengineKeys.join(',\n  ')}
  }
  `,
    { ...prettierRc, parser: 'typescript' },
  )
  writeFileSync(path, index)
}
