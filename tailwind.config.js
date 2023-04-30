module.exports = {
   content: ['./src/**/*.tsx'],
   theme: {
      extend: {
         colors: {
            gray: {
               900: '#0E0E0E',
               800: '#1B1B1B',
               700: '#252525',
               600: '#484848',
               500: '#71717A',
               400: '#A1A1AA',
               300: '#D4D4D8'
            },
            green: {
               900: '#09140E',
               700: '#0B964B',
               600: '#0DC763',
               300: '#18EC79'
            },
            red: {
               900: '#1A1215'
            }
         },
         fontFamily: {
            heading: ['Poppins_700Bold', 'sans-serif'],
            heading_md: ['Poppins_500Medium', 'sans-serif'],
            reading: ['Roboto_400Regular', 'sans-serif']
         },
         screens: {
            base: '280px',
            sm: '340px',
            md: '380px',
            lg: '410px',
            xl: '1280px'
         }
      }
   },
   plugins: []
};
