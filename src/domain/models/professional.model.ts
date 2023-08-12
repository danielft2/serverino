export type ProfessionalModel = {
   user_id: number;
   uuid: string;
   nome_fantasia: string;
   linkImagem: string;
   linkImagemCapa: string;

   usuario: {
      nome: string;
      telefone: string;
      interacoes: {
         id?: number;
         user_id: number;
         tipo_id: number;
         registro_id: number;
      }[];
   };
   area: {
      id: number;
      nome: string;
   };
   atuacoes: {
      id: number;
      titulo: string;
      descricao: string;
   }[];
   atendimentos: {
      id: number;
      nome: string;
      uf: string;
   }[];
};
