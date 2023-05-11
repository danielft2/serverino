import * as SecureStore from 'expo-secure-store';
import { TOKEN_KEY } from './config/storage.config';
import { AppError } from '@utils';
import { APP_ERROS_TYPES } from '@constants';

export async function saveToken(token: string) {
   try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
   } catch (error) {
      throw new AppError(
         'Ocorreu um erro inesperado no login',
         APP_ERROS_TYPES.SAVED_TOKEN
      );
   }
}
