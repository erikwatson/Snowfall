export default {
  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  }
}
