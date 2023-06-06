import { useState } from 'react';

import { UserAdressModel } from '@domain/models/user-adress.model';

import axios from 'axios';

const api_url = `https://viacep.com.br/ws`;

interface UserLocation {
   data: UserAdressModel;
   error: string;
}

interface useAdressProps {
   onSearchCompleted: (data: UserLocation) => void;
}

export function useAdress({ onSearchCompleted }: useAdressProps) {
   const [loading, setLoading] = useState(false);

   async function searchAdressByCEP(cep: string) {
      setLoading(true);
      try {
         const response = await axios.get(`${api_url}/${cep}/json/`);
         onSearchCompleted({
            data: !response.data?.erro
               ? {
                    cep: response.data.cep.replace('-', ''),
                    cidade_id: response.data.ibge,
                    cidade: response.data.localidade,
                    uf: response.data.uf
                 }
               : ({} as UserAdressModel),
            error: response.data.erro ? 'Insira um cep válido.' : ''
         });
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   }

   return {
      searchAdressByCEP,
      loading
   };
}
