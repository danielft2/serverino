import { useContext } from 'react';
import { SessionContext } from '../context/Session';

export function useSession() {
   const context = useContext(SessionContext);
   return context;
}
