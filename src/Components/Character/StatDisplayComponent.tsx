import { Masonry } from "@mui/lab"
import { Divider, ListItem, Box } from "@mui/material"
import { useContext, useMemo } from "react"
import { DataContext } from "../../Context/DataContext"
import { FormulaDataContext } from "../../Context/FormulaDataContext"
import { OptimizationTargetContext } from "../../Context/OptimizationTargetContext"
import { ArtCharDatabase, DatabaseContext } from "../../Database/Database"
import { getDisplayHeader, getDisplaySections } from "../../Formula/DisplayUtil"
import { DisplaySub } from "../../Formula/type"
import { NodeDisplay, UIData } from "../../Formula/uiData"
import { customRead } from "../../Formula/utils"
import usePromise from "../../ReactHooks/usePromise"
import { objectMap } from "../../Util/Util"
import CardDark from "../Card/CardDark"
import CardHeaderCustom from "../Card/CardHeaderCustom"
import { FieldDisplayList, NodeFieldDisplay } from "../FieldDisplay"
import ImgIcon from "../Image/ImgIcon"
import SqBadge from "../SqBadge"

export default function StatDisplayComponent() {
  const optimizationTarget = useContext(OptimizationTargetContext)
  const { data, oldData } = useContext(DataContext)
  const { setFormulaData } = useContext(FormulaDataContext)
  const { database } = useContext(DatabaseContext)

  const sections = useMemo(() =>
    getDisplaySections(data).filter(([, ns]) => Object.values(ns).some(n => !n.isEmpty)),
    [data])
  return useMemo(() => <Box sx={{ mr: -1, mb: -1 }}>
    <Masonry columns={{ xs: 1, sm: 2, md: 3, xl: 4 }} spacing={1}>
      {sections.map(([key, Nodes]) =>
        <Section key={key} displayNs={Nodes} sectionKey={key}
          optimizationTarget={optimizationTarget} data={data} oldData={oldData} setFormulaData={setFormulaData} database={database}
        />)}
    </Masonry >
  </Box>, [data, database, oldData, optimizationTarget, sections, setFormulaData])
}
function Section({ displayNs, sectionKey, optimizationTarget, data, oldData, setFormulaData, database }: {
  displayNs: DisplaySub<NodeDisplay>,
  sectionKey: string,
  optimizationTarget?: string[],
  data: UIData, oldData?: UIData,
  setFormulaData: (data?: UIData | undefined, node?: NodeDisplay<number> | undefined) => void
  database: ArtCharDatabase
}) {
  const header = usePromise(() => getDisplayHeader(data, sectionKey, database), [data, sectionKey])
  const displayNsReads = useMemo(() => objectMap(displayNs, (n, nodeKey) => customRead(["display", sectionKey, nodeKey])), [displayNs, sectionKey]);
  return useMemo(() => {
    if (!header) return <CardDark></CardDark>
    const { title, icon, action } = header
    return <CardDark >
      <CardHeaderCustom avatar={icon && <ImgIcon size={2} sx={{ m: -1 }} src={icon} />} title={title} action={action && <SqBadge>{action}</SqBadge>} />
      <Divider />
      <FieldDisplayList sx={{ m: 0 }}>
        {Object.entries(displayNs).map(([nodeKey, n]) =>
          <NodeFieldDisplay data={data} setFormulaData={setFormulaData} key={nodeKey} node={n} oldValue={oldData ? oldData.get(displayNsReads[nodeKey]!).value : undefined} component={ListItem}
            emphasize={JSON.stringify(optimizationTarget) === JSON.stringify([sectionKey, nodeKey])}
          />)}
      </FieldDisplayList>
    </CardDark>
  }, [data, displayNs, displayNsReads, header, oldData, optimizationTarget, sectionKey, setFormulaData])
}
