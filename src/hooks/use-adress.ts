import { useEffect, useState } from 'react';
import axios from 'axios';

import { useFormContext } from 'react-hook-form';

const api_url = `https://viacep.com.br/ws`;

interface UseAdressProps {
  cep: string;
  uf: string;
  cidade: string;
  cidade_id: string;
}

export function useAdress({ cep, cidade, cidade_id, uf }: UseAdressProps) {
  const [loading, setLoading] = useState(false);
  const { getValues, setValue, setError, watch } = useFormContext();

  const cepWatch = watch(cep);

  useEffect(() => {
    if (cepWatch?.length === 7) {
      setValue(uf, '');
      setValue(cidade, '');
      setValue(cidade_id, '', { shouldValidate: true });
    }
  }, [cepWatch, setValue, cidade, uf, cidade_id]);

  async function searchAdressByCEP() {
    setLoading(true);
    try {
      const response = await axios.get(`${api_url}/${getValues(cep)}/json/`);

      if (!response.data?.erro) {
        setValue(uf, response.data.uf);
        setValue(cidade, response.data.localidade);
        setValue(cidade_id, response.data.ibge, {
          shouldValidate: true
        });
      } else {
        setError(cep, { message: 'Insira um cep válido.' });
      }
    } catch (error) {
      setError(cep, { message: 'Não foi possivel realizar a busca.' });
    } finally {
      setLoading(false);
    }
  }

  return {
    searchAdressByCEP,
    loading
  };
}
