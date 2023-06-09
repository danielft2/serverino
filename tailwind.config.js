module.exports = {
   content: ['./src/**/*.tsx'],
   theme: {
      extend: {
         colors: {
            gray: {
               50: '#eaeaea',
               100: '#bebebf',
               200: '#9e9ea0',
               300: '#727275',
               400: '#56565a',
               500: '#2c2c31',
               600: '#28282d',
               700: '#1f1f23',
               800: '#18181b',
               900: '#121215'
            },
            green: {
               50: '#e7f7ee',
               100: '#dbf3e6',
               200: '#b4e6cc',
               300: '#0eaf59',
               400: '#0d9e50',
               500: '#0b8c47',
               600: '#0b8343',
               700: '#086935',
               800: '#064f28',
               900: '#053d1f'
            },
            blue_dark: {
               50: '#e9e9ea',
               100: '#dddedf',
               200: '#b9babd',
               300: '#1e212a',
               400: '#1b1e26',
               500: '#181a22',
               600: '#171920',
               700: '#121419',
               800: '#0d0f13',
               900: '#0b0c0f'
            },
            inputs_state: {
               invalidate: '#1A1215',
               validate: '#09140E'
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
