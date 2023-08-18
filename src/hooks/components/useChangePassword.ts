import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

import { updatePasswordDTO } from '@domain/dtos';
import { SessionsService } from '@services/http/session.service';
import { ERRORS_MESSAGES } from '@services/http/errors';
import { useToast } from '@hooks/shared';
import { ChangePasswordScheme } from '@validation';
import { AppError } from '@utils';

export function useChangePassword() {
   const [isChangePasswordSuccess, setIsChangePasswordSuccess] =
      useState(false);
   const { showBasicMessage } = useToast();
   const createChangePasswordForm = useForm<updatePasswordDTO>({
      resolver: zodResolver(ChangePasswordScheme)
   });

   const {
      formState: { isValid },
      getValues
   } = createChangePasswordForm;

   const { isLoading, mutateAsync: handleChangePassword } = useMutation({
      mutationFn: () => SessionsService.updatePassword(getValues()),
      onSuccess: (data) => {
         if (data.meta.status_code === 201) {
            setIsChangePasswordSuccess(true);
         } else {
            showBasicMessage(ERRORS_MESSAGES.GENERIC_ERROR);
         }
      },
      onError: (error) => {
         if (error instanceof AppError) showBasicMessage(error.message);
         else showBasicMessage(ERRORS_MESSAGES.GENERIC_ERROR);
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
