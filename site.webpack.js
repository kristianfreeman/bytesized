module.exports = {
  target: 'webworker',
  entry: './workers-site/index.js',
  module: {
    rules: [{ test: /\.hbs$/, loader: 'handlebars-loader' }],
  },
}
