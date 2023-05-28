export interface RegisterDTO {
   name: string;
   phone: string;
   email: string;
   password: string;
   password_confirm: string;
   term?: boolean;
}