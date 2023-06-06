import Toast from 'react-native-toast-message';

import { toastConfig } from '@components/ToastMessage';
import { queryClient } from '@lib/react-query';

import { Context } from '../@types/context';
import { AuthProvider } from './Auth';
import { SessionProvider } from './Session';

import { QueryClientProvider } from '@tanstack/react-query';

export function AppProvider({ children }: Context) {
   return (
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <SessionProvider>{children}</SessionProvider>
            <Toast config={toastConfig} />
         </AuthProvider>
      </QueryClientProvider>
   );
}
