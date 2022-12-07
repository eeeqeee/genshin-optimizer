import { Replay } from '@mui/icons-material';
import { Button, CardContent, Divider, Grid, Typography, Box } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { arrayEq, useMemoEq } from '..';
import { artifactSlotIcon } from '../../../../../Components/Artifact/SlotNameWIthIcon';
import BootstrapTooltip from '../../../../../Components/BootstrapTooltip';
import SqBadge from '../../../../../Components/SqBadge';
import { StatColoredWithUnit } from '../../../../../Components/StatDisplay';
import StatIcon from '../../../../../Components/StatIcon';
import { CharacterContext } from '../../../../../Context/CharacterContext';
import Artifact from '../../../../../Data/Artifacts/Artifact';
import { BuildSettingReducerAction } from '../../../../../Database/DataManagers/BuildSettingData';
import { MainStatKey } from '../../../../../Types/artifact';
import { allElementsWithPhy } from '../../../../../Types/consts';
import useBuildSetting from '../useBuildSetting';

export const artifactsSlotsToSelectMainStats = ["sands", "goblet", "circlet"] as const

export default function MainStatSelectionCard({ disabled = false, }: {
  disabled?: boolean
}) {
  const { character: { key: characterKey } } = useContext(CharacterContext)
  const { buildSetting: { mainStatKeys }, buildSettingDispatch } = useBuildSetting(characterKey)

  return <Box display="flex" flexDirection="column" gap={1}>
    {artifactsSlotsToSelectMainStats.map(slotKey =>
      <MainStatSelectionCardFactory
        key={slotKey}
        mainStatKeySlotKey={mainStatKeys[slotKey]}
        slotKey={slotKey}
        disabled={disabled}
        buildSettingDispatch={buildSettingDispatch} />
    )}
  </Box >
}

function MainStatSelectionCardFactory({ mainStatKeySlotKey, slotKey, disabled, buildSettingDispatch }: {
  mainStatKeySlotKey: MainStatKey[]
  slotKey: typeof artifactsSlotsToSelectMainStats[number]
  disabled: boolean
  buildSettingDispatch: (action: BuildSettingReducerAction) => boolean
}) {
  const { t } = useTranslation("artifact")
  const mainStatKeySlotKey_ = useMemoEq(() => mainStatKeySlotKey, arrayEq)
  const numSel = mainStatKeySlotKey_.length
  return useMemo(() =>
    <Box>
      <Divider />
      <CardContent sx={{ pt: 1 }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", pb: 1 }}>
          <BootstrapTooltip placement="top" title={<Typography>{t(`slotName.${slotKey}`)}</Typography>}>
            <span>{artifactSlotIcon(slotKey)}</span>
          </BootstrapTooltip>
          <Box flexGrow={1}>
            <SqBadge color="info">{numSel ? `${numSel} Selected` : `Any`}</SqBadge>
          </Box>
          <Button color="error" size="small" disabled={!numSel || disabled} sx={{ mt: -1, mb: -1 }}
            onClick={() => buildSettingDispatch({ type: "mainStatKey", slotKey })}>
            <Replay />
          </Button>
        </Box>
        <Grid container spacing={1}>
          {Artifact.slotMainStats(slotKey).map((mainStatKey, i) => {
            const element = allElementsWithPhy.find(ele => mainStatKey.includes(ele))
            const color = mainStatKeySlotKey_.includes(mainStatKey)
              ? element ?? "success"
              : "secondary"
            return <MainStatSelectionCardInnerFactoryAbstractBuilderMethod key={mainStatKey} i={i} slotKey={slotKey} mainStatKey={mainStatKey} color={color} disabled={disabled} buildSettingDispatch={buildSettingDispatch} />
          })}
        </Grid>
      </CardContent>
    </Box>
    , [slotKey, t, numSel, disabled, buildSettingDispatch, mainStatKeySlotKey_])
}

function MainStatSelectionCardInnerFactoryAbstractBuilderMethod({ i, slotKey, mainStatKey, color, disabled, buildSettingDispatch }: {
  i: number,
  slotKey: typeof artifactsSlotsToSelectMainStats[number]
  mainStatKey: MainStatKey
  color: typeof allElementsWithPhy[number] | "success" | "secondary"
  disabled: boolean
  buildSettingDispatch: (action: BuildSettingReducerAction) => boolean
}) {
  return useMemo(() => <Grid item flexGrow={1} xs={(i < 3 && slotKey !== "goblet") ? 4 : undefined} >
    <BootstrapTooltip placement="top" title={<Typography><strong><StatColoredWithUnit statKey={mainStatKey} /></strong></Typography>} disableInteractive>
      <Button fullWidth size="small" color={color} sx={{ fontSize: "1.2em", height: "100%", pointerEvents: disabled ? "none" : undefined, cursor: disabled ? "none" : undefined }}
        onClick={() => buildSettingDispatch({ type: "mainStatKey", slotKey, mainStatKey })}>
        {StatIcon[mainStatKey]}
      </Button>
    </BootstrapTooltip>
  </Grid>, [buildSettingDispatch, color, disabled, i, mainStatKey, slotKey])
}
