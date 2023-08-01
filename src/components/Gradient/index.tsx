import { LinearGradient } from 'expo-linear-gradient';

interface GradientProps {
   colors?: string[];
}

export function Gradient({
   colors = [
      'rgba(13, 158, 80, 0.07)',
      ' rgba(11, 12, 15, 0.00) 100%',
      'rgba(11, 12, 15, 0.00) 100%'
   ]
}: GradientProps) {
   return (
      <LinearGradient
         colors={colors}
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
