import { useFormContext } from 'react-hook-form';

export function useErrorMessageForm() {
   const {
      formState: { errors }
   } = useFormContext();

   function get(path: string) {
      const travel = (regexp: RegExp) =>
         String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce(
               (res, key) =>
                  res !== null && res !== undefined ? res[key] : res,
               errors
            );

      const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
      return result ? result.message?.toString() : null;
   }

   return {
      get
   };
}
