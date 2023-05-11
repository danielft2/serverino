import * as SecureStore from 'expo-secure-store';
import { AppError } from '@utils';
import { APP_ERROS_TYPES } from '@constants';
import { TOKEN_KEY } from './storage.config';

async function saveToken(token: string) {
   try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
   } catch (error) {
      throw new AppError(
         'Ocorreu um erro inesperado no login',
         APP_ERROS_TYPES.SAVED_TOKEN
      );
   }
}

async function retrieveToken() {
   const token = await SecureStore.getItemAsync(TOKEN_KEY);
   if (token) return token;
   else return null;
}

export const AuthStorage = {
   saveToken,
   retrieveToken
};
