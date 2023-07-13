import { cva } from 'class-variance-authority';

export const InputVariants = cva(
   'rounded-full border-[0.5px] px-6 font-reading text-gray-100 base:h-11 sm:h-[52px] lg:h-14',
   {
      variants: {
         variant: {
            valid: 'bg-blue_dark-300 border-gray-700 focus:border-green-800 focus:bg-inputs_state-validate',
            invalid:
               'border-red-800 bg-inputs_state-invalidate focus:border-red-800'
         }
      },
      defaultVariants: {
         variant: 'valid'
      }
   }
);
