import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { UserService } from '@services/user/user-service';
import { useToast } from '../hooks/use-toast';
import { ChangePasswordScheme } from '@validation';
import { AppError } from '@utils/others';
import { APP_CONSTANTS } from '@constants';

export type UserUpdatePasswordScheme = z.infer<typeof ChangePasswordScheme>;

export function useChangePassword() {
  const [isChangePasswordSuccess, setIsChangePasswordSuccess] = useState(false);
  const { showBasicMessage } = useToast();
  const createChangePasswordForm = useForm<UserUpdatePasswordScheme>({
    resolver: zodResolver(ChangePasswordScheme)
  });

  const {
    formState: { isValid },
    getValues
  } = createChangePasswordForm;

  const { isLoading, mutateAsync: handleChangePassword } = useMutation({
    mutationFn: () => UserService.updatePassword(getValues()),
    onSuccess: (data) => {
      if (data.meta.status_code === 201) {
        setIsChangePasswordSuccess(true);
      } else {
        showBasicMessage(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
      }
    },
    onError: (error) => {
      if (error instanceof AppError) showBasicMessage(error.message);
      else showBasicMessage(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
    }
  });

  return {
    createChangePasswordForm,
    isValid,
    isLoading,
    isChangePasswordSuccess,
    handleChangePassword
  };
}
