import { Success } from '@components/Success';

interface UpdateInformationsSucessProps {
   onClose: () => void;
}

export function UpdateInformationsSuccess({
   onClose
}: UpdateInformationsSucessProps) {
   return (
      <Success.Root onClose={onClose}>
         <Success.Title>Os seus dados foram atualizados.</Success.Title>
         <Success.Description>
            Se você tiver alterado seu endereço o feed será atualizado baseado
            nas novas informações.
         </Success.Description>
      </Success.Root>
   );
}
