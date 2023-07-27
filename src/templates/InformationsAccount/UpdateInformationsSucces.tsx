import { Success } from '@components/Success';

export function UpdateInformationsSuccess() {
   return (
      <Success.Root>
         <Success.Title>Os seus dados foram atualizados.</Success.Title>
         <Success.Description>
            Se você tiver alterado seu endereço o feed será atualizado baseado
            nas novas informações.
         </Success.Description>
      </Success.Root>
   );
}
