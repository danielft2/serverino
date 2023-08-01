import { InputControlled } from '@components/FormControlled';
import { View } from 'react-native';

export function RegisterLocationData() {
   return (
      <View>
         <InputControlled.Adress
            cep="endereco.cep"
            uf="endereco.uf"
            cidade="endereco.cidade"
            cidade_id="endereco.cidade_id"
         />
      </View>
   );
}
