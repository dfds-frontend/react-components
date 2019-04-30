const config = {
  env: {
    test: {
      presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react'], ['@babel/preset-typescript']],
    },
    development: {
      presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react'], ['@babel/preset-typescript']],
    },
    production: {
      presets: [['@babel/preset-env', { modules: false }], ['@babel/preset-react'], ['@babel/preset-typescript']],
    },
  },
}
module.exports = config
