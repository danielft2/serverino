import * as SecureStore from 'expo-secure-store';

import { AppError } from '@utils/others';

import { TOKEN_KEY } from './configuration-storage';

async function saveToken(token: string) {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    throw new AppError('Ocorreu um erro inesperado no login');
  }
}

async function deleteToken() {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    throw new AppError('Ocorreu um erro inesperado ao sair da conta.');
  }
}

async function retrieveToken() {
  const token = await SecureStore.getItemAsync(TOKEN_KEY);
  if (token) return token;
  else return null;
}

export const AuthStorage = {
  saveToken,
  deleteToken,
  retrieveToken
};
