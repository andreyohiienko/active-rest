/* eslint-disable */
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/index.less'), 'utf8'),
)

module.exports = withSass({
  ...withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }

      // import-glob
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|s?[ca]ss)$/,
        loader: 'import-glob',
      })

      // aliases
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@components': path.resolve(__dirname, 'src/components'),
          '@interfaces': path.resolve(__dirname, 'src/interfaces'),
        },
      }

      return config
    },
  }),
})
