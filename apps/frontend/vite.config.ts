/// <reference types="vitest" />
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import path from 'node:path'

// import { webWorkerPlugin } from './cursed.js'

export default defineConfig(({ command }) => ({
  cacheDir: '../../node_modules/.vite/frontend',
  envPrefix: ['VITE_', 'NX_'],

  optimizeDeps: {
    include: ['@genshin-optimizer/char-cards'],
  },

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        'node_modules/@fontsource',
      ],
    },
  },

  // resolve: {
  //   alias: {
  //     'react-dom$': 'react-dom/profiling'
  //     ,
  //     // 'scheduler/tracing': path.resolve(
  //     //   __dirname,
  //     //   'node_modules/scheduler/tracing-profiling'
  //     // ),
  //   },
  // },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  resolve:
    command === 'serve'
      ? {
          alias: [
            {
              find: '@genshin-optimizer/g-assets',
              replacement: path.resolve(__dirname, '../../dist/libs/g-assets'),
            },
          ],
        }
      : undefined,

  plugins: [
    // webWorkerPlugin(),
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  worker: {
    plugins: [
      viteTsConfigPaths({
        root: '../../',
      }),
    ],
  },
}))
