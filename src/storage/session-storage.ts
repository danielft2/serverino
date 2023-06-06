import * as SecureStore from 'expo-secure-store';

import { UserModel } from '@domain/models';
import { AppError } from '@utils';

import { SESSION_KEY } from './storage.config';

async function retrieveSession() {
   const session = await SecureStore.getItemAsync(SESSION_KEY);
   if (session) return JSON.parse(session);
   else return null;
}

async function saveSession(user: UserModel) {
   try {
      const userSession = {
         nome: user.nome,
         telefone: user.telefone,
         cidade: user.cidade,
         cep: user.cep,
         email: user.email,
         id: user.id,
         tipo_id: user.tipo_id,
         status_id: user.status_id
      };
      await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify(userSession));
   } catch (error) {
      throw new AppError('Ocorreu um erro inesperado no login.');
   }
}

export const SessionStorage = {
   saveSession,
   retrieveSession
};
