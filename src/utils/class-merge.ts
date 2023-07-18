import { ClassValue, clsx } from 'clsx';

export function cnMerge(...inputs: ClassValue[]) {
   return clsx(...inputs);
}
