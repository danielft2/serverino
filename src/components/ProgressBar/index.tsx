import { useEffect, useState } from 'react';
import { View } from 'moti';

interface ProgressBarProps {
   totalItems: number;
   totalItemsCompleted: number;
}

export function ProgessBar({
   totalItems,
   totalItemsCompleted
}: ProgressBarProps) {
   const [progress, setProgress] = useState(0);
   const [progressOld, setProgressOld] = useState(0);

   useEffect(() => {
      setProgressOld(progress);
      setProgress((totalItemsCompleted / totalItems) * 100);
   }, [totalItems, totalItemsCompleted, progress]);

   return (
      <View className={`w-full h-1.5 bg-gray-700 overflow-hidden`}>
         <View
            from={{
               width: `${progressOld}%`
            }}
            animate={{
               width: `${progress}%`
            }}
            transition={{
               type: 'timing',
               duration: 300
            }}
            className={`h-1.5 bg-green-500 transition-all rounded-full`}
         ></View>
      </View>
   );
}
