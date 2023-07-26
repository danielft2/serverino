import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { UpdateInformationsScheme } from '@validation';
import { useEffect } from 'react';
import { UpdateInforDTO } from '@domain/dtos';
import { useSession } from '@hooks/shared';
import { hideEmail } from '@utils';
import { useMutation } from '@tanstack/react-query';
import { SessionsService } from '@services/http/session.service';

export function useUpdateInformations() {
   const { user } = useSession();
   const createUpdateInformationsForm = useForm<UpdateInforDTO>({
      resolver: zodResolver(UpdateInformationsScheme)
   });
   const {
      getValues,
      setValue,
      formState: { isValid, isDirty }
   } = createUpdateInformationsForm;

   const {
      isLoading,
      mutateAsync: updateInformations,
      isSuccess
   } = useMutation({
      mutationKey: ['update-user'],
      mutationFn: (data: UpdateInforDTO) =>
         SessionsService.updateInformations(data)
   });

   function handleUpdate() {
      const data = getValues();
      if (data.email.includes('*')) data.email = user.email;
      updateInformations({
         nome: data.nome,
         email: data.email,
         ...data.endereco
      });
   }

   useEffect(() => {
      setValue('nome', user.nome, { shouldValidate: true });
      setValue('email', hideEmail(user.email), { shouldValidate: true });
      setValue(
         'endereco',
         {
            cep: user.cep,
            cidade: user.cidade.nome,
            cidade_id: user.cidade.id.toString(),
            uf: user.cidade.uf.nome
         },
         { shouldValidate: true }
      );
   }, [setValue, user]);

   return {
      createUpdateInformationsForm,
      handleUpdate,
      isValid,
      isDirty,
      isLoading,
      isSuccess
   };
}
