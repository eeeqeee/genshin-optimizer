// Cut down version of https://github.com/OpenSourceRaidGuild/babel-vite/blob/883dabde33acfccc863e7356b6e7bc1007a8cc55/packages/babel-plugin-transform-vite-meta-env/src/index.ts
const replaceVars = [
  {
    regex: /^(VITE_|NX_)/,
    replacement: (template, variableName) =>
      template.expression('process.env.%%variableName%%')({ variableName }),
  },
  {
    regex: /^NODE_ENV$/,
    replacement: (template) =>
      template.expression.ast("process.env.NODE_ENV || 'test'"),
  },
]

const replaceEnv = (template) =>
  template.expression.ast(`{
    ...Object.fromEntries(Object.entries(process.env).filter(([k]) => /^(VITE_|NX_)/.test(k))),
    NODE_ENV: process.env.NODE_ENV || 'test',
    MODE: process.env.NODE_ENV || 'test',
    BASE_URL: '/',
    DEV: process.env.NODE_ENV !== 'production',
    PROD: process.env.NODE_ENV === 'production'
  }`)

function getReplacement(variableName, template) {
  return replaceVars
    .filter(({ regex }) => regex.test(variableName))
    .map(({ replacement }) => replacement(template, variableName))[0]
}

module.exports = function viteMetaEnvBabelPlugin({ template, types: t }) {
  return {
    name: 'vite-meta-env',
    visitor: {
      MemberExpression(path) {
        const envNode =
          t.isMemberExpression(path.node.object) && path.node.object
        const variableName =
          t.isIdentifier(path.node.property) && path.node.property.name

        if (!envNode || !variableName) {
          return
        }

        const isMetaProperty = t.isMetaProperty(envNode.object)
        const isEnvVar =
          t.isIdentifier(envNode.property) && envNode.property.name === 'env'

        if (!isMetaProperty || !isEnvVar) {
          return
        }

        const replacement = getReplacement(variableName, template)

        if (replacement) {
          path.replaceWith(replacement)
        }
      },
      MetaProperty(path) {
        const envNode =
          t.isMemberExpression(path.parentPath.node) && path.parentPath.node

        if (!envNode) {
          return
        }

        const isEnvVar =
          t.isIdentifier(envNode.property) && envNode.property.name === 'env'

        if (!isEnvVar) {
          return
        }

        path.parentPath.replaceWith(replaceEnv(template))
      },
    },
  }
}
