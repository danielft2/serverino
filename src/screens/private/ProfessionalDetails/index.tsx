import { SafeAreaView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';

import {
   ProfessionalCover,
   ProfessionalHeader,
   ProfessionalOccupations,
   ProfessionalServiceLocations,
   ProfessionalTalk
} from '@templates/ProfessionalDetails';
import { SomethingWrong } from '@templates/Errors';
import { Loading } from '@components/Loading';
import { useProfessionalDetails } from '@hooks/screens';

type ParamsProps = {
   uuid: string;
};

export function ProfessionalDetails() {
   const { params } = useRoute();
   const { uuid } = params as ParamsProps;

   const { professional, isLoading, isFetching, isError, refetch } =
      useProfessionalDetails(uuid);

   if (isError) return <SomethingWrong onTryAgain={refetch} />;

   return (
      <SafeAreaView className="flex-1">
         {isLoading || isFetching ? (
            <Loading.Background loading />
         ) : (
            <View className="flex-1">
               <ProfessionalCover coverUrl={professional?.linkImagemCapa} />
               <Animated.View
                  className="base:px-3 sm:px-4"
                  entering={FadeIn.delay(150)}
               >
                  <ProfessionalHeader
                     name={professional?.nome_fantasia}
                     avatarUrl={professional?.linkImagem}
                     areaName={professional?.area.nome}
                     interactions={professional?.usuario.interacoes ?? []}
                  />
                  <ProfessionalOccupations
                     occupations={professional?.atuacoes}
                  />
                  <ProfessionalServiceLocations
                     services={professional?.atendimentos}
                  />
               </Animated.View>
               <ProfessionalTalk
                  numberPhone={professional?.usuario?.telefone}
               />
            </View>
         )}
      </SafeAreaView>
   );
}
