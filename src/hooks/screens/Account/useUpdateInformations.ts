import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { UpdateInformationsScheme } from '@validation';
import { UpdateInforDTO } from '@domain/dtos';
import { useSession, useToast } from '@hooks/shared';
import { SessionsService } from '@services/http/session.service';
import { ERRORS_MESSAGES } from '@services/http/errors';
import { AppError, hideEmail } from '@utils';

export function useUpdateInformations() {
   const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

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

   const { isLoading, mutateAsync: updateInformations } = useMutation({
      mutationKey: ['update-user'],
      mutationFn: (data: UpdateInforDTO) =>
         SessionsService.updateInformations(data),
      onSuccess: (data) => {
         if (data.meta.status_code === 204) {
            setIsUpdateSuccess(true);
            updateUserStorage(data.meta.results);
         } else {
            showErrorMessage(ERRORS_MESSAGES.GENERIC_ERROR);
            if (isUpdateSuccess) setIsUpdateSuccess(false);
         }
      },
      onError: (error) => {
         if (error instanceof AppError) showErrorMessage(error.message);
         else showErrorMessage(ERRORS_MESSAGES.GENERIC_ERROR);
         if (isUpdateSuccess) setIsUpdateSuccess(false);
      }
   });

   function handleUpdate() {
      const data = getValues();
      if (data.email.includes('*')) data.email = user.email;
      updateInformations({
         nome: data.nome,
         email: data.email,
         ...data
      });
   }

   useEffect(() => {
      setValue('nome', user.nome, { shouldValidate: true });
      setValue('email', hideEmail(user.email), { shouldValidate: true });
      setValue('cep', user.cep, { shouldValidate: true });
      setValue('uf', user.cidade.uf.nome, { shouldValidate: true });
      setValue('cidade', user.cidade.nome, { shouldValidate: true });
      setValue('cidade_id', user.cidade.id.toString(), {
         shouldValidate: true
      });
   }, [setValue, user]);

   return {
      createUpdateInformationsForm,
      handleUpdate,
      isValid,
      isDirty,
      isLoading,
      isUpdateSuccess
   };
}
