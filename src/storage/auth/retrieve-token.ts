import * as SecureStore from 'expo-secure-store';
import { TOKEN_KEY } from './config/storage.config';

export async function retrieveToken() {
   const token = await SecureStore.getItemAsync(TOKEN_KEY);
   if (token) return token;
   else return null;
}
