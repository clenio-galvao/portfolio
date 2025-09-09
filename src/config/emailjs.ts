// Configuração do EmailJS
// As configurações são carregadas das variáveis de ambiente

export const EMAILJS_CONFIG = {
  // Seu Public Key do EmailJS
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
  
  // ID do serviço (Gmail)
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  
  // ID do template de email
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  
  // Email de destino (seu email)
  TO_EMAIL: process.env.REACT_APP_EMAILJS_TO_EMAIL || ''
};

// Função para validar se as configurações estão definidas
export const validateEmailJSConfig = (): boolean => {
  const { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } = EMAILJS_CONFIG;
  const isValid = !(
    !PUBLIC_KEY ||
    !SERVICE_ID ||
    !TEMPLATE_ID ||
    PUBLIC_KEY === '' ||
    SERVICE_ID === '' ||
    TEMPLATE_ID === ''
  );
  return isValid;
};
