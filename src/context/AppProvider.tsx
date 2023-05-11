import { QueryClientProvider } from '@tanstack/react-query';
import { Context } from '../@types/context';
import { queryClient } from '../lib/react-query';
import { AuthProvider } from './Auth';
import { SessionProvider } from './Session';

export function AppProvider({ children }: Context) {
   return (
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            <SessionProvider>{children}</SessionProvider>
         </AuthProvider>
      </QueryClientProvider>
   );
}
