import { useMutation } from '@tanstack/react-query';

import { AuthService } from '@services/auth.service';
import { ERRORS_MESSAGES } from '@services/errors';
import { useSession, useToast } from '@hooks/shared';
import { useSessionStore } from '@store/session';

export function useActivateAccount() {
   const user = useSessionStore((state) => state.user);
   const { updateSession } = useSession();
   const { showBasicMessage } = useToast();

   const { isLoading, mutateAsync: handleValidateCodeOtp } = useMutation(
      async (code: string) => {
         try {
            const response = await AuthService.ActivateAccount(code);
            if (response.meta.status_code === 400)
               showBasicMessage(ERRORS_MESSAGES.VALIDATE_ACCOUNT_CODE_INVALID);
            else updateSession({ ...user, status_id: '2' });
         } catch (error) {
            showBasicMessage(ERRORS_MESSAGES.GENERIC_ERROR);
         }
      }
   );

   return {
      handleValidateCodeOtp,
      isLoading
   };
}
