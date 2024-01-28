import { useCallback } from 'react';

import { UserModel } from '@domain/models';
import { SessionStorage } from '@storage/session-storage';
import { useSessionStore } from '@store/session';
import { AppError } from '@utils';

export function useSession() {
   const user = useSessionStore((state) => state.user);
   const updateUserStore = useSessionStore((state) => state.updateUserStore);

   const updateSession = useCallback(
      async (userUpdate: UserModel) => {
         try {
            updateUserStore(userUpdate);
            await SessionStorage.saveSession(userUpdate, user.link);
         } catch (error) {
            if (error instanceof AppError) {
               console.log(error.message);
            }
         }
      },
      [user?.link, updateUserStore]
   );

   const retrieveSession = useCallback(async () => {
      const userStorage = await SessionStorage.retrieveSession();
      if (userStorage) {
         updateUserStore(userStorage);
      }
   }, [updateUserStore]);

   return {
      updateSession,
      retrieveSession
   };
}
