import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { UpdateInformationsScheme } from '@validation';
import { UpdateInforDTO } from '@domain/dtos';
import { useSession, useToast } from '@hooks/shared';
import { hideEmail } from '@utils';
import { SessionsService } from '@services/http/session.service';
import { ERRORS_MESSAGES } from '@services/http/errors';

export function useUpdateInformations() {
   const { user, updateUserStorage } = useSession();
   const { showErrorMessage } = useToast();
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
         SessionsService.updateInformations(data),
      onSuccess: (data) => {
         if (data.meta.status_code === 204) {
            updateUserStorage(data.meta.results);
         } else {
            showErrorMessage(ERRORS_MESSAGES.GENERIC_ERROR);
         }
      }
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
