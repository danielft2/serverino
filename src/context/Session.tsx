import { createContext, useEffect, useState } from 'react';
import { Context } from '../@types/context';
import { UserModel } from '@domain/models';
import { retrieveSession } from '@storage/session/retrieve-session';

interface SessionContextData {
   user: Partial<UserModel>;
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
      const userStorage = await retrieveSession();
      console.log(userStorage);
   }

   return (
      <SessionContext.Provider value={null}>{children}</SessionContext.Provider>
   );
}
