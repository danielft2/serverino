import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { CheckCircle, Star, ThumbsUp } from 'lucide-react-native';

import { Avatar } from '@components/Avatar';
import { UserIdentify } from '@components/UserIdentify';
import { useFontsize } from '@hooks/shared';

import { Result } from './components/Result';

interface ProfessionalHeaderProps {
   name: string;
   areaName: string;
   avatarUrl: string;
   interactions: {
      tipo_id: number;
   }[];
}

export function ProfessionalHeader({
   name = '',
   avatarUrl = '',
   areaName = '',
   interactions = []
}: ProfessionalHeaderProps) {
   const [results, setResults] = useState({ likes: 0, recommends: 0 });

   const { getFontsize } = useFontsize();

   const getCountLikesAndRecommends = useCallback(() => {
      let likes = 0;
      let recommends = 0;
      interactions.forEach((item) => {
         if (item.tipo_id === 1) likes++;
         else recommends++;
      });

      setResults({ likes, recommends });
   }, [interactions]);

   useEffect(() => {
      getCountLikesAndRecommends();
   }, [getCountLikesAndRecommends]);

   return (
      <View className="mb-6 space-y-2">
         <View className="items-center">
            <Avatar.Root className="-mt-20">
               <Avatar.Container
                  source={avatarUrl}
                  size={110}
                  border="white"
                  borderSize="md"
                  hasLoading
               >
                  <Avatar.Fallback name={name ?? ''} size={18} />
               </Avatar.Container>
            </Avatar.Root>
            <UserIdentify name={name} description={areaName} />
         </View>
         <View className="w-full flex-row space-x-1.5">
            <Result result={`${results.likes} curtidas`}>
               <ThumbsUp
                  className="-mt-[2px] text-red-400"
                  size={getFontsize(14)}
               />
            </Result>
            <Result result={`${results.recommends} recomend.`}>
               <CheckCircle
                  className="-mt-[2px] text-green-400"
                  size={getFontsize(14)}
               />
            </Result>
            <Result result="Novo">
               <Star className="-mt-[2px] text-white" size={getFontsize(14)} />
            </Result>
         </View>
      </View>
   );
}
