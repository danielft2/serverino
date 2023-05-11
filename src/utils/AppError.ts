import { APP_ERROS_TYPES } from '@constants';

export class AppError {
   constructor(private msg: string, private type: APP_ERROS_TYPES) {}

   public message() {
      return this.message;
   }
}
