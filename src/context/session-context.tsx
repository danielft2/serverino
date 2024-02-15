import { createContext, useCallback, useEffect, useState } from 'react';

import { SessionStorage } from '@storage/session-storage';
import { AppError } from '@utils/others';
import { useAuth } from '../hooks/use-auth';
import { useProfessionalAreas } from '../hooks/use-professional-areas';

import { Context } from '../@types/context';
import { UserModel } from '@services/auth/models/user-model';

interface SessionContextData {
  user: UserModel;
  updateUserStorage: (user: UserModel) => Promise<void>;
}

export const SessionContext = createContext<SessionContextData>(
  {} as SessionContextData
);

export function SessionProvider({ children }: Context) {
  const [user, setUser] = useState<UserModel>(null);
  const { fetchAreas } = useProfessionalAreas();
  const { refreshSession } = useAuth();

  const getUserStorage = useCallback(async () => {
    const userStorage = await SessionStorage.retrieveSession();
    if (userStorage) {
      fetchAreas();
      setUser(userStorage);
    }
  }, [fetchAreas]);

  const updateUserStorage = useCallback(
    async (userUpdate: UserModel) => {
      const avatarUrl = userUpdate?.link ? userUpdate.link : user.link;
      try {
        setUser({
          ...userUpdate,
          link: avatarUrl
        });
        await SessionStorage.saveSession(userUpdate, user.link);
      } catch (error) {
        if (error instanceof AppError) {
          console.log(error.message);
        }
      }
    },
    [user?.link]
  );

  useEffect(() => {
    getUserStorage();
  }, [getUserStorage]);

  useEffect(() => {
    if (refreshSession?.id) {
      fetchAreas();
      setUser(refreshSession);
    }
  }, [refreshSession, fetchAreas]);

  return (
    <SessionContext.Provider value={{ user, updateUserStorage }}>
      {children}
    </SessionContext.Provider>
  );
}
