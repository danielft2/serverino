import * as SecureStore from 'expo-secure-store';
import { UserModel } from '@domain/models';
import { SESSION_KEY } from './config/storage.config';
import { AppError } from '@utils';
import { APP_ERROS_TYPES } from '@constants';

export async function saveSession(user: UserModel) {
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
      throw new AppError(
         'Ocorreu um erro inesperado no login.',
         APP_ERROS_TYPES.SAVED_SESSION
      );
   }
}
