import { RFValue } from 'react-native-responsive-fontsize';
import { CheckCircle, Heart } from 'lucide-react-native';

import { Professional } from '@components/Professional';
import { ProfessionalModel } from '@domain/models/professional.model';
import { memo } from 'react';

interface ProfessionalSummaryProps {
   data: ProfessionalModel;
}

function ProfessionalSummaryRoot({ data }: ProfessionalSummaryProps) {
   return (
      <Professional.Container>
         <Professional.Root
            areaName={data.area.nome}
            fullName={data.nome_fantasia}
            avatarUrl={data.linkImagem}
         >
            <Professional.Content
               coverUrl={data.linkImagemCapa}
               aboutMe={data?.atuacoes[0]?.descricao}
            />
         </Professional.Root>
         <Professional.Actions>
            <Professional.ActionIcon onPress={() => true} label="Curtir">
               <Heart className="text-white" size={RFValue(20)} />
            </Professional.ActionIcon>
            <Professional.ActionIcon onPress={() => true} label="Recomendar">
               <CheckCircle className="text-white" size={RFValue(18)} />
            </Professional.ActionIcon>
         </Professional.Actions>
      </Professional.Container>
   );
}

export const ProfessionalSummary = memo(ProfessionalSummaryRoot);
