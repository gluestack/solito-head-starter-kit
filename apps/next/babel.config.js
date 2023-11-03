module.exports = {
  presets: ['next/babel'],
  plugins: [['react-native-web', { commonjs: true }]],
}

const path = require('path')
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['next/babel'],
    plugins: [
      ['react-native-web', { commonjs: true }],
      [
        'module-resolver',
        {
          alias: {
            // For development, we want to alias the library to the source
            ['@gluestack/app']: path.join(
              __dirname,
              '../../packages/app/screens'
            ),
          },
        },
      ],
    ],
  }
}
