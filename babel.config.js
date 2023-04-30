module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         'nativewind/babel',
         [
            'module-resolver',
            {
               root: ['./'],
               alias: {
                  '@screens': './src/screens',
                  '@components': './src/components',
                  '@assets': './assets',
                  '@styles': './src/styles'
               }
            }
         ]
      ]
   };
};
