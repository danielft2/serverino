import { LinearGradient } from 'expo-linear-gradient';

export function Gradient() {
   return (
      <LinearGradient
         colors={['rgba(13, 158, 80, 0.09)', ' rgba(11, 12, 15, 0.00) 100%']}
         style={{
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
         }}
      />
   );
}
