import * as SecureStore from 'expo-secure-store';

import { AppError } from '@utils/others';

import { SESSION_KEY } from './configuration-storage';
import { UserModel } from '@services/auth/models/user-model';

async function retrieveSession() {
  const session = await SecureStore.getItemAsync(SESSION_KEY);
  if (session) return JSON.parse(session);
  else return null;
}

async function saveSession(user: UserModel, urlAvatar = '') {
  try {
    const userSession = {
      ...user,
      link: user.link ? user.link : urlAvatar
    };
    await SecureStore.setItemAsync(SESSION_KEY, JSON.stringify(userSession));
  } catch (error) {
    throw new AppError('Ocorreu um erro inesperado no login.');
  }
}

async function closeSession() {
  try {
    await SecureStore.deleteItemAsync(SESSION_KEY);
  } catch (error) {
    throw new AppError('Ocorreu um erro inesperado ao sair da conta');
  }
}

export const SessionStorage = {
  saveSession,
  closeSession,
  retrieveSession
};
