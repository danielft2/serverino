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
      <View className={`h-1.5 w-full overflow-hidden bg-blue_dark-300`}>
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
            className={`h-1.5 rounded-full bg-green-500 transition-all`}
         ></View>
      </View>
   );
}
