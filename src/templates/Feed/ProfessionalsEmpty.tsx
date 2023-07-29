import { View, Text, Pressable } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { useFontsize, useSession } from '@hooks/shared';
import { Button } from '@components/Button';
import Worker from '@assets/ilustrations/worker.svg';

import { RotateCw } from 'lucide-react-native';
import { Loading } from '@components/Loading';
import { theme } from '../../theme';

interface ProfessionalsEmptyProps {
   isFetching: boolean;
   refetch: () => void;
}

export function ProfessionalsEmpty({
   isFetching,
   refetch
}: ProfessionalsEmptyProps) {
   const { user } = useSession();
   const { getFontsize } = useFontsize();

   return (
      <View className="items-center" style={{ height: RFPercentage(75) }}>
         <Pressable
            onPress={refetch}
            className="items-center justify-center rounded-full bg-blue_dark-500 base:h-10 base:w-10 md:h-12 md:w-12"
         >
            {isFetching && <Loading.Default color={theme.colors.white} />}
            {!isFetching && (
               <RotateCw size={getFontsize(20)} className="text-white" />
            )}
         </Pressable>
         <View className="flex-1 items-center justify-center space-y-4 px-4">
            <View className="items-center">
               <Worker width={RFValue(180)} height={RFValue(158)} />
               <Text
                  className="mt-2 text-center font-heading_sm text-white"
                  style={{ fontSize: getFontsize(15) }}
               >
                  {`Ainda não existe nenhum profissional cadastrado em ${user.cidade.nome} - ${user.cidade.uf.nome}.`}
               </Text>
               <Text
                  className="text-gray-100"
                  style={{ fontSize: getFontsize(13) }}
               >
                  Tente atualizar o feed ou indique um profissional.
               </Text>
            </View>
            <Button.Root weigth="auto">
               <Button.Text>Indicar Professional</Button.Text>
            </Button.Root>
         </View>
      </View>
   );
}
