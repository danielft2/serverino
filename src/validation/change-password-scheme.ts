import { z } from 'zod';
import { APP_CONSTANTS } from '@constants';

export const ChangePasswordScheme = z
   .object({
      password: z
         .string()
         .nonempty(APP_CONSTANTS.SCHEMES_VALIDATIONS.FIELD_REQUIRED)
         .min(6, APP_CONSTANTS.SCHEMES_VALIDATIONS.PASSWORD_MIN_LENGTH),
      password_confirmation: z
         .string()
         .nonempty(APP_CONSTANTS.SCHEMES_VALIDATIONS.FIELD_REQUIRED)
   })
   .superRefine((value, ctx) => {
      if (value.password !== value.password_confirmation) {
         ctx.addIssue({
            path: ['password'],
            code: 'custom',
            message: APP_CONSTANTS.SCHEMES_VALIDATIONS.PASSWORD_DONT_MATCH
         });
      }
   });
