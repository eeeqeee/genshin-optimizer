import { getUnitStr, valueString } from '@genshin-optimizer/common/util'
import type { StatKey } from '@genshin-optimizer/zzz/consts'
import { StatDisplay } from '@genshin-optimizer/zzz/ui'
import { Box, Typography } from '@mui/material'

export function StatsDisplay({
  stats,
  showBase = false,
}: {
  stats: Record<string, number>
  showBase?: boolean
}) {
  return (
    <Box sx={{ columnCount: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
      {Object.entries(stats)
        .filter(([k]) => showBase || !k.endsWith('_base'))
        .map(([k, v]) => (
          <Typography
            key={k}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <StatDisplay key={k} statKey={k as StatKey} />{' '}
            <span>{valueString(v, getUnitStr(k))}</span>
          </Typography>
        ))}
    </Box>
  )
}
