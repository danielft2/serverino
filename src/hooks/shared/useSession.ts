import { useContext } from 'react';

import { SessionContext } from '@contexts/Session';

export function useSession() {
   const context = useContext(SessionContext);
   return context;
}
