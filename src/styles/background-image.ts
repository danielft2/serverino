import { StyleSheet } from 'react-native';

export const background = StyleSheet.create({
   backgroundImage: {
      resizeMode: 'cover',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 10
   }
});
