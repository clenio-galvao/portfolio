// Configuração do EmailJS - ARQUIVO DE EXEMPLO
// Copie este arquivo para emailjs.ts e configure com suas credenciais

export const EMAILJS_CONFIG = {
  // Seu Public Key do EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',
  
  // ID do serviço (Gmail, Outlook, etc.)
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',
  
  // ID do template de email
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',
  
  // Email de destino (seu email)
  TO_EMAIL: 'seu-email@gmail.com'
};

// Função para validar se as configurações estão definidas
export const validateEmailJSConfig = (): boolean => {
  const { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } = EMAILJS_CONFIG;
  
  return !(
    PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
    SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
    TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE'
  );
};
