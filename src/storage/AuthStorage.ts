import * as SecureStore from 'expo-secure-store';
import { AppError } from '@utils';
import { TOKEN_KEY } from './storage.config';

async function saveToken(token: string) {
   try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
   } catch (error) {
      throw new AppError('Ocorreu um erro inesperado no login');
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