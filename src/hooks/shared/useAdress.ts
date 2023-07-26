import { useState } from 'react';
import axios from 'axios';

import { UserAdressModel } from '@domain/models';
import { LocationDTO } from '@domain/dtos';

const api_url = `https://viacep.com.br/ws`;

interface useAdressProps {
   onSearchCompleted: (data: LocationDTO) => void;
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
         onSearchCompleted({ error: 'Não foi possivel realizar a busca.' });
      } finally {
         setLoading(false);
      }
   }

   return {
      searchAdressByCEP,
      loading
   };
}
