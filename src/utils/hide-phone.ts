export function hidePhone(phone: string) {
   const startPhone = phone.slice(0, 3);
   const endPhone = phone.slice(9, 11);
   return `${startPhone}******${endPhone}`;
}
