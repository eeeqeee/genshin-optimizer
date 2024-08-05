import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import type { Metadata, Viewport } from 'next'
import theme from '../theme'
import { getSupabase } from '../utils/supabase/server'
import Content from './Content'
import { UserProfileContextProvider } from './context/UserProfileContext'
import './global.css'
import getAccount from './util/getAccount'
import getProfile from './util/getProfile'
import getUser from './util/getUser'

export const metadata: Metadata = {
  title: 'Welcome to gi-frontend',
  description: 'Generated by create-nx-workspace',
}

export const viewport: Viewport = {
  themeColor: '#0c1020',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = getSupabase()
  const user = await getUser(supabase)
  const profile = await getProfile(supabase, user)
  const account = await getAccount(supabase, profile)
  return (
    <html lang="en">
      <body
        style={{
          background:
            'radial-gradient(ellipse at bottom, #1b2735 0%, #0c1020 100%)',
          minHeight: '100vh',
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <UserProfileContextProvider
              user={user}
              profile={profile}
              account={account}
            >
              <Content>{children}</Content>
            </UserProfileContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
