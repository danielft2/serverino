import { ClassValue, clsx } from 'clsx';

export function cnMerge(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

export function hideEmail(email: string) {
  const startEmail = email.split('')[0];
  const endEmail = email.split('@')[1];
  return `${startEmail}*********@${endEmail}`;
}

export function hidePhone(phone: string) {
  const startPhone = phone.slice(0, 3);
  const endPhone = phone.slice(9, 11);
  return `${startPhone}******${endPhone}`;
}
