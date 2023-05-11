import * as SecureStore from 'expo-secure-store';
import { SESSION_KEY } from './config/storage.config';

export async function retrieveSession() {
   const session = await SecureStore.getItemAsync(SESSION_KEY);
   if (session) return JSON.parse(session);
   else return null;
}
