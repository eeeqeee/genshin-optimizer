import { CardThemed, useTitle } from '@genshin-optimizer/common/ui'
import { colorToRgbaString, hexToColor } from '@genshin-optimizer/common/util'
import type { CharacterKey } from '@genshin-optimizer/gi/consts'
import { charKeyToLocGenderedCharKey } from '@genshin-optimizer/gi/consts'
import type { GeneratedBuild } from '@genshin-optimizer/gi/db'
import type { CharacterContextObj } from '@genshin-optimizer/gi/db-ui'
import {
  CharacterContext,
  TeamCharacterContext,
  type TeamCharacterContextObj,
  useBuildTc,
  useCharacter,
  useDBMeta,
  useDatabase,
  useTeam,
  useTeamChar,
} from '@genshin-optimizer/gi/db-ui'
import { getCharEle } from '@genshin-optimizer/gi/stats'
import {
  type ChartData,
  DataContext,
  FormulaDataWrapper,
  GraphContext,
  type GraphContextObj,
  OptTargetWrapper,
  SillyContext,
  type dataContextObj,
  useTeamDataNoContext,
} from '@genshin-optimizer/gi/ui'
import { Box, Skeleton } from '@mui/material'
import {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import {
  Navigate,
  Route,
  Routes,
  useMatch,
  useNavigate,
  useParams,
} from 'react-router-dom'
import type { BuildTcContexObj, SetBuildTcAction } from './BuildTcContext'
import { BuildTcContext } from './BuildTcContext'
import Content from './CharacterDisplay/Content'
import TeamCharacterSelector from './TeamCharacterSelector'
import TeamSetting from './TeamSetting'

export default function PageTeam() {
  const database = useDatabase()
  const { teamId } = useParams<{ teamId?: string }>()
  const invalidKey = !teamId || !database.teams.keys.includes(teamId)

  // An edit is triggered whenever a team gets opened even if no edits are done
  useEffect(() => {
    if (invalidKey) return
    database.teams.set(teamId, { lastEdit: Date.now() })
  }, [teamId, database.teams, invalidKey])

  if (invalidKey) return <Navigate to="/teams" />

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Suspense
        fallback={<Skeleton variant="rectangular" width="100%" height={1000} />}
      >
        {teamId && <Page teamId={teamId} />}
      </Suspense>
    </Box>
  )
}

const fallback = <Skeleton variant="rectangular" width="100%" height={1000} />
// Stored per teamCharId
const chartDataAll: Record<string, ChartData> = {}
const graphBuildAll: Record<string, GeneratedBuild[]> = {}

function Page({ teamId }: { teamId: string }) {
  const database = useDatabase()
  const navigate = useNavigate()
  const { silly } = useContext(SillyContext)
  const { gender } = useDBMeta()

  const team = useTeam(teamId)!
  const { loadoutData } = team
  // use the current URL as the "source of truth" for characterKey and tab.
  const {
    params: { characterKey: characterKeyRaw },
  } = useMatch({ path: '/teams/:teamId/:characterKey', end: false }) ?? {
    params: {},
  }
  const {
    params: { tab },
  } = useMatch({ path: '/teams/:teamId/:characterKey/:tab' }) ?? {
    params: {},
  }

  // validate characterKey
  const loadoutDatum = useMemo(() => {
    const loadoutDatum = loadoutData.find(
      (loadoutDatum) =>
        loadoutDatum?.teamCharId &&
        database.teamChars.get(loadoutDatum.teamCharId)?.key === characterKeyRaw
    )

    return loadoutDatum
  }, [loadoutData, database.teamChars, characterKeyRaw])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  useEffect(() => {
    if (!loadoutDatum) navigate('', { replace: true })
  }, [loadoutDatum, navigate])

  const teamCharId = loadoutDatum?.teamCharId
  const characterKey = database.teamChars.get(teamCharId)?.key

  const teamChar = useTeamChar(teamCharId ?? '')

  const { t } = useTranslation([
    'sillyWisher_charNames',
    'charNames_gen',
    'page_character',
    'page_team',
  ])

  useTitle(
    useMemo(() => {
      const charName = characterKey
        ? t(
            `${
              silly ? 'sillyWisher_charNames' : 'charNames_gen'
            }:${charKeyToLocGenderedCharKey(characterKey, gender)}`
          )
        : t('page_team:teamSettings.tab.team')
      const tabName = tab
        ? t(`page_character:tabs.${tab}`)
        : characterKey
          ? t('page_character:tabs.setting')
          : tab
      return tabName
        ? `${team.name} - ${charName} - ${tabName}`
        : `${team.name} - ${charName}`
    }, [t, team.name, silly, characterKey, gender, tab])
  )

  const teamCharacterContextValue: TeamCharacterContextObj | undefined =
    useMemo(() => {
      if (!teamCharId || !teamChar || !loadoutDatum) return undefined
      return {
        teamId,
        team,
        teamCharId,
        teamChar,
        loadoutDatum,
      }
    }, [teamId, team, teamCharId, teamChar, loadoutDatum])

  const teamData = useTeamDataNoContext(teamId, teamCharId ?? '')
  const { target: charUIData } =
    (characterKey && teamData?.[characterKey]) ?? {}

  const dataContextValue: dataContextObj | undefined = useMemo(() => {
    if (!teamData || !charUIData) return undefined
    return {
      data: charUIData,
      teamData,
      compareData: undefined,
    }
  }, [charUIData, teamData])

  return (
    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
      <CardThemed>
        <TeamCharacterSelector
          teamId={teamId}
          characterKey={characterKey}
          tab={tab}
        />
        <Box
          sx={(theme) => {
            const elementKey = characterKey && getCharEle(characterKey)
            if (!elementKey) return {}
            const hex = theme.palette[elementKey].main as string
            const color = hexToColor(hex)
            if (!color) return {}
            const rgba = colorToRgbaString(color, 0.1)
            return {
              background: `linear-gradient(to bottom, ${rgba} 0%, rgba(0,0,0,0)) 25%`,
            }
          }}
        >
          {teamCharacterContextValue ? (
            dataContextValue ? (
              <TeamCharacterContext.Provider value={teamCharacterContextValue}>
                <DataContext.Provider value={dataContextValue}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      p: 1,
                    }}
                  >
                    <InnerContent tab={tab} />
                  </Box>
                </DataContext.Provider>
              </TeamCharacterContext.Provider>
            ) : (
              fallback
            )
          ) : (
            <TeamSetting teamId={teamId} teamData={teamData} />
          )}
        </Box>
      </CardThemed>
    </Box>
  )
}
function InnerContent({ tab }: { tab?: string }) {
  const database = useDatabase()
  const {
    teamCharId,
    teamChar: { key: characterKey },
    loadoutDatum,
  } = useContext(TeamCharacterContext)
  const character = useCharacter(characterKey as CharacterKey)
  const CharacterContextValue: CharacterContextObj | undefined = useMemo(
    () =>
      character && {
        character,
      },
    [character]
  )

  const [chartData, setChartDataState] = useState<ChartData | undefined>(
    chartDataAll[teamCharId]
  )
  const [graphBuilds, setGraphBuildState] = useState<
    GeneratedBuild[] | undefined
  >(graphBuildAll[teamCharId])
  useEffect(() => {
    setChartDataState(chartDataAll[teamCharId])
    setGraphBuildState(graphBuildAll[teamCharId])
  }, [teamCharId, setChartDataState, setGraphBuildState])

  const graphContextValue: GraphContextObj | undefined = useMemo(() => {
    return {
      chartData,
      setChartData: (data) => {
        if (data) chartDataAll[teamCharId] = data
        setChartDataState(data)
      },
      graphBuilds,
      setGraphBuilds: (data) => {
        if (data) graphBuildAll[teamCharId] = data
        setGraphBuildState(data)
      },
    }
  }, [
    teamCharId,
    chartData,
    graphBuilds,
    setChartDataState,
    setGraphBuildState,
  ])
  const buildTc = useBuildTc(loadoutDatum.buildTcId)!
  const setBuildTc = useCallback(
    (data: SetBuildTcAction) => {
      database.buildTcs.set(loadoutDatum.buildTcId, data)
    },
    [loadoutDatum.buildTcId, database]
  )
  const buildTCContextObj = useMemo(
    () =>
      ({
        buildTc: loadoutDatum.buildType === 'tc' ? buildTc : undefined,
        setBuildTc,
      }) as BuildTcContexObj,
    [buildTc, loadoutDatum.buildType, setBuildTc]
  )
  if (!CharacterContextValue) return fallback
  return (
    <CharacterContext.Provider value={CharacterContextValue}>
      <BuildTcContext.Provider value={buildTCContextObj}>
        <GraphContext.Provider value={graphContextValue}>
          <FormulaDataWrapper>
            <OptTargetWrapper>
              <Routes>
                <Route path=":characterKey">
                  <Route path="*" index element={<Content tab={tab} />} />
                </Route>
              </Routes>
            </OptTargetWrapper>
          </FormulaDataWrapper>
        </GraphContext.Provider>
      </BuildTcContext.Provider>
    </CharacterContext.Provider>
  )
}
