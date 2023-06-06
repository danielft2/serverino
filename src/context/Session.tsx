import { createContext, useCallback, useEffect, useState } from 'react';

import { UserModel } from '@domain/models';
import { SessionStorage } from '@storage/session-storage';
import { AppError } from '@utils';

import { Context } from '../@types/context';

interface SessionContextData {
   user: Partial<UserModel>;
   updateUserStorage: (user: UserModel) => Promise<void>;
}

export const SessionContext = createContext<SessionContextData>(
   {} as SessionContextData
);

export function SessionProvider({ children }: Context) {
   const [user, setUser] = useState<Partial<UserModel>>(null);

   useEffect(() => {
      getUserStorage();
   }, []);

   async function getUserStorage() {
      const userStorage = await SessionStorage.retrieveSession();
      setUser(userStorage);
   }

   const updateUserStorage = useCallback(async (user: UserModel) => {
      try {
         await SessionStorage.saveSession(user);
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
