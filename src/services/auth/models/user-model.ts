export type UserModel = {
  id: number;
  tipo_id: string;
  status_id: string;

  nome: string;
  telefone: string;
  email: string;
  link: string;
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
