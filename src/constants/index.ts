export const APP_CONSTANTS = {
  SCHEMES_VALIDATIONS: {
    FIELD_REQUIRED: 'Campo obrigatório.',
    PHONE_INVALID: 'O telefone precisa ser válido.',
    EMAIL_INVALID: 'O email precisa ser váilido.',
    PASSWORD_MIN_LENGTH: 'A senha precisa ter 6 caracteres.',
    PASSWORD_DONT_MATCH: 'A senha não confere.'
  },

  UPDATE_AVATAR: {
    PICKER_IMAGE_FAILED: 'Algo deu errado, tente novamente.',
    PERMISIONS_DENIED: 'Ative as permisões do aplicativo nas configurações.',
    PICKER_IMAGE_SIZE: 'A imagem excede o tamanho máximo de 5mb.'
  },

  QUERIES_KEYS: {
    QUERY_FEED: 'professionals-feed',
    PROFESSIONAL_DETAILS: 'professional-details',
    PROFESSIONALS_AREAS: 'professionals-areas',
    PROFESSIONAL_BY_AREA: 'professionals-by-area'
  },

  MUTATIONS_KEYS: {
    PROFESSIONAL_INTERACTION: 'interaction-professional'
  },

  ERRORS_MESSAGES: {
    CREDENCIALS_INVALID: 'Usuário e/ou senha incorretos!',
    PHONE_ALREDY_EXISTS: 'Esse telefone já foi cadastrado!',
    GENERIC_ERROR: 'Algo deu errado, tente novamente!',
    VALIDATE_ACCOUNT_CODE_INVALID: 'O código enviado não confere!',
    ALREDY_EXISTS: '403'
  }
};
