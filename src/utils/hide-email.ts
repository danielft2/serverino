export function hideEmail(email: string) {
   const startEmail = email.split('')[0];
   const endEmail = email.split('@')[1];
   return `${startEmail}*********@${endEmail}`;
}
