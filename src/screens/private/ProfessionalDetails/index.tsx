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

type ParamsProps = {
   id: string;
};

export function ProfessionalDetails() {
   const { params } = useRoute();
   const { id } = params as ParamsProps;

   const { professional, isLoading, isFetching } = useProfessionalDetails(id);

   return (
      <SafeAreaView className="flex-1">
         {isLoading || isFetching ? (
            <ProfessionalSkeleton />
         ) : (
            <View className="flex-1">
               <ProfessionalCover coverUrl={professional?.linkImagemCapa} />
               <View className="px-4">
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
