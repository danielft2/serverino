import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@services/auth/auth-service';
import { useSession, useToast } from '@hooks';
import { APP_CONSTANTS } from '@constants';

export function useActivateAccount() {
  const { updateUserStorage, user } = useSession();
  const { showBasicMessage } = useToast();

  const { isLoading, mutateAsync: handleValidateCodeOtp } = useMutation(
    async (code: string) => {
      try {
        const response = await AuthService.ActivateAccount(code);
        if (response.meta.status_code === 400)
          showBasicMessage(
            APP_CONSTANTS.ERRORS_MESSAGES.VALIDATE_ACCOUNT_CODE_INVALID
          );
        else updateUserStorage({ ...user, status_id: '2' });
      } catch (error) {
        showBasicMessage(APP_CONSTANTS.ERRORS_MESSAGES.GENERIC_ERROR);
      }
    }
  );

  return {
    handleValidateCodeOtp,
    isLoading
  };
}
