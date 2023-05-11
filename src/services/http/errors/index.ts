const CREDENCIALS_INVALID = {
   status_code: 401,
   message: 'Usuário e/ou senha incorretos'
};

const GENERIC_ERROR = {
   status_code: 500,
   message: 'Serviço indisponível, tente novamente mais tarde.'
};

export const ERRORS_MESSAGES = {
   CREDENCIALS_INVALID,
   GENERIC_ERROR
};
