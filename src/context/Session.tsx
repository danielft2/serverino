import { createContext, useCallback, useEffect, useState } from 'react';

import { UserModel } from '@domain/models';
import { SessionStorage } from '@storage/session-storage';
import { AppError } from '@utils';

import { Context } from '../@types/context';
import { useAuth } from '@hooks/shared/useAuth';
import { useMutation } from '@tanstack/react-query';

interface SessionContextData {
   user: Partial<UserModel>;
   updateUserStorage: (user: UserModel) => Promise<void>;
}

export const SessionContext = createContext<SessionContextData>(
   {} as SessionContextData
);

export function SessionProvider({ children }: Context) {
   const [user, setUser] = useState<UserModel>(null);
   const { refreshSession } = useAuth();

   useEffect(() => {
      getUserStorage();
   }, []);

   useEffect(() => {
      if (refreshSession?.id) setUser(refreshSession);
   }, [refreshSession]);

   async function getUserStorage() {
      const userStorage = await SessionStorage.retrieveSession();
      setUser(userStorage);
   }

   const updateUserStorage = useCallback(async (user: UserModel) => {
      try {
         await SessionStorage.saveSession(user);
         setUser(user);
      } catch (error) {
         if (error instanceof AppError) {
            console.log(error.message);
         }
      }
   }, []);

   return (
      <SessionContext.Provider value={{ user, updateUserStorage }}>
         {children}
      </SessionContext.Provider>
   );
}
