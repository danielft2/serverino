import Toast from 'react-native-toast-message';
import { QueryClientProvider } from '@tanstack/react-query';

import { toastConfig } from '@components/ui/toast-message';
import { AuthProvider } from '@contexts/auth-context';
import { SessionProvider } from '@contexts/session-context';

import { Context } from '../../@types/context';
import { queryClient } from '../react-query';

export function AppProvider({ children }: Context) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SessionProvider>{children}</SessionProvider>
      </AuthProvider>
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}
