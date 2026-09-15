import path from 'path'
import { fileURLToPath } from 'url'
import { merge } from 'webpack-merge'
import common from './webpack.common.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  merge(common, {
    mode: 'production',

    experiments: {
      outputModule: true
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.esm.js',
      module: true,
      library: {
        type: 'module'
      }
    },

    externalsType: 'module',

    externals: {
      '@erikwatson/bramble': '@erikwatson/bramble'
    }
  }),

  merge(common, {
    mode: 'production',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.cjs',
      library: {
        type: 'commonjs2'
      }
    }
  })
]
