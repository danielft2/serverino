import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { useSession, useToast } from '@hooks';
import { UserService } from '@services/user/user-service';
import { AppError } from '@utils/others';
import { hideEmail } from '@utils/helpers';
import { APP_CONSTANTS } from '@constants';
import { UpdateInformationsScheme } from '@screens/private/account/schemes/scheme';

export type UserUpdateScheme = z.infer<typeof UpdateInformationsScheme>;

export function useUpdateAccount() {
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);

  const { user, updateUserStorage } = useSession();

  const { showErrorMessage } = useToast();
  const createUpdateInformationsForm = useForm<UserUpdateScheme>({
    resolver: zodResolver(UpdateInformationsScheme)
  });
  const {
    getValues,
    setValue,
    formState: { isValid, isDirty }
  } = createUpdateInformationsForm;

  const { isLoading, mutateAsync: updateInformations } = useMutation({
    mutationKey: ['update-user'],
    mutationFn: (data: UserUpdateScheme) =>
      UserService.updateInformations(data),
    onSuccess: (data) => {
      if (data.meta.status_code === 204) {
        setIsUpdateSuccess(true);
        updateUserStorage(data.meta.results);
      } else {
        showErrorMessage(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
        if (isUpdateSuccess) setIsUpdateSuccess(false);
      }
    },
    onError: (error) => {
      if (error instanceof AppError) showErrorMessage(error.message);
      else showErrorMessage(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
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
