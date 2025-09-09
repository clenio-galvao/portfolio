import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, validateEmailJSConfig } from '../config/emailjs';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

class EmailService {
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (validateEmailJSConfig()) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      this.isInitialized = true;
    }
  }

  async sendEmail(data: EmailData): Promise<EmailResponse> {
    if (!this.isInitialized) {
      return {
        success: false,
        message: 'EmailJS não configurado. Verifique as configurações.'
      };
    }

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: data.email,
        to_name: 'Clenio Galvão',
        subject: `Nova mensagem do portfolio - ${data.name}`,
        email: 'clenio.cgm@gmail.com'
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
      
      return {
        success: true,
        message: 'Email enviado com sucesso!'
      };
    } catch (error) {
      // Verificar tipo de erro específico
      let errorMessage = 'Erro ao enviar email. Tente novamente mais tarde.';
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid email')) {
          errorMessage = 'Email inválido. Verifique o endereço de email.';
        } else if (error.message.includes('Service not found')) {
          errorMessage = 'Serviço de email não encontrado. Verifique o Service ID.';
        } else if (error.message.includes('Template not found')) {
          errorMessage = 'Template de email não encontrado. Verifique o Template ID.';
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = 'Chave pública inválida. Verifique o Public Key.';
        } else if (error.message.includes('recipients address is empty')) {
          errorMessage = 'Template não configurado. Verifique as configurações do template no EmailJS.';
        }
      }
      
      return {
        success: false,
        message: errorMessage
      };
    }
  }

  isConfigured(): boolean {
    return this.isInitialized;
  }
}

// Instância singleton do serviço
export const emailService = new EmailService();
