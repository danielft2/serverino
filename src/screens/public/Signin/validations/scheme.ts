import * as yup from 'yup';

export const SingInScheme = yup.object({
   telefone: yup
      .string()
      .required('Informe seu Telefone')
      .test('test-name', 'Informe um Telefone válido', function (value) {
         const phoneRegex =
            /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/; // Change this regex based on requirement

         if (!phoneRegex.test(value)) return false;
         return true;
      }),
   password: yup
      .string()
      .required('Informe a senha')
      .min(6, 'Pelo menos 6 caracteres')
});
