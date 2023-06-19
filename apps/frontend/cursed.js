import {
  workerFileToUrl,
  parseRequest,
  WORKER_FILE_ID,
  workerCache,
} from 'vite/dist/node/chunks/dep-934dbc7c.js'

export function webWorkerPlugin(config) {
  const isWorkerQueryId = (id) => {
    const query = parseRequest(id)
    if (query && query[WORKER_FILE_ID] != null) {
      return query
    }
    return false
  }
  return {
    name: 'patch-firefox-worker',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    load(id) {
      if (isWorkerQueryId(id)) {
        return ''
      }
    },
    async transform(code, id) {
      const query = isWorkerQueryId(id)
      if (!query) {
        return
      }

      await workerFileToUrl(config, id, query)
      let workerMap = workerCache.get(config.mainConfig || config)
      let fileName = workerMap.bundle.get(id)
      return {
        code: workerMap.assets.get(fileName).source,
        map: { mappings: '' }, // Empty sourcemap to suppress Rollup warning
      }
    },
  }
}
