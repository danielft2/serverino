module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'module:react-native-dotenv',
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@screens': './src/screens',
            '@templates': './src/templates',
            '@components': './src/components',
            '@contexts': './src/context',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@domain': './src/domain',
            '@libs': './src/libs',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@validation': './src/validation',
            '@assets': './assets',
            '@config': './src/config'
          }
        }
      ]
    ]
  };
};
