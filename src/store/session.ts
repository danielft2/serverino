import { create } from 'zustand';
import { UserModel } from '@domain/models';

type SessionStore = {
   user: UserModel | null;
   updateUserStore: (userUpdate: UserModel) => void;
};

export const useSessionStore = create<SessionStore>((set) => {
   return {
      user: null,
      updateUserStore: (userUpdate: UserModel) =>
         set((state) => {
            const avatarUrl = userUpdate?.link
               ? userUpdate.link
               : state.user.link;

            return {
               user: userUpdate
            };
         })
   };
});
