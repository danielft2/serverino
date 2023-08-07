import { SafeAreaView, View } from 'react-native';

import {
   ProfessionalCover,
   ProfessionalHeader,
   ProfessionalOccupations,
   ProfessionalServiceLocations,
   ProfessionalSkeleton,
   ProfessionalTalk
} from '@templates/ProfessionalDetails';
import { useProfessionalDetails } from '@hooks/screens';
import { useRoute } from '@react-navigation/native';
import { SomethingWrong } from '@templates/Errors';

type ParamsProps = {
   id: string;
};

export function ProfessionalDetails() {
   const { params } = useRoute();
   const { id } = params as ParamsProps;

   const { professional, isLoading, isFetching, isError, refetch } =
      useProfessionalDetails(id);

   if (isError) return <SomethingWrong onTryAgain={refetch} />;

   return (
      <SafeAreaView className="flex-1">
         {isLoading || isFetching ? (
            <ProfessionalSkeleton />
         ) : (
            <View className="flex-1">
               <ProfessionalCover coverUrl={professional?.linkImagemCapa} />
               <View className="base:px-3 sm:px-4">
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
               </View>
               <ProfessionalTalk
                  numberPhone={professional?.usuario?.telefone}
               />
            </View>
         )}
      </SafeAreaView>
   );
}
