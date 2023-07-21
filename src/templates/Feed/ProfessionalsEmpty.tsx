import { View, Text, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useSession } from '@hooks/shared';
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

   return (
      <View className="h-[65%] items-center">
         <Pressable
            onPress={refetch}
            className="h-12 w-12 items-center justify-center rounded-full bg-blue_dark-500"
         >
            {isFetching && <Loading.Default color={theme.colors.white} />}
            {!isFetching && <RotateCw size={20} className="text-white" />}
         </Pressable>
         <View className="flex-1 items-center justify-center space-y-4 px-4">
            <View className="items-center">
               <Worker width={RFValue(180)} height={RFValue(158)} />
               <Text
                  className="text-center font-heading_md text-white"
                  style={{ fontSize: RFValue(13) }}
               >
                  {`Ainda não existe nenhum profissional cadastrado em ${user.cidade.nome} - ${user.cidade.uf.nome}`}
               </Text>
               <Text
                  className="text-gray-100"
                  style={{ fontSize: RFValue(13) }}
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
