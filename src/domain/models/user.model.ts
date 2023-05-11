export type UserModel = {
   id: number;
   tipo_id: number;
   status_id: number;

   nome: string;
   telefone: string;
   email: string;
   cep: string;
   cidade: {
      id: number;
      nome: string;
      uf: {
         nome: string;
         descricao: string;
      };
   };
};
