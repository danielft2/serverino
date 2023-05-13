module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         'nativewind/babel',
         'module:react-native-dotenv',
         [
            'module-resolver',
            {
               root: ['./'],
               alias: {
                  '@screens': './src/screens',
                  '@components': './src/components',
                  '@hooks': './src/hooks',
                  '@services': './src/services',
                  '@domain': './src/domain',
                  '@lib': './src/lib',
                  '@storage': './src/storage',
                  '@utils': './src/utils',
                  '@constants': './src/constants',
                  '@assets': './assets',
                  '@styles': './src/styles',
                  '@theme:': './src/theme'
               }
            }
         ]
      ]
   };
};
