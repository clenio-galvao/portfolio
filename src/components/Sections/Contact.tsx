import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ContactContainer, 
  ContactContent, 
  ContactInfo, 
  SectionTitle, 
  SectionSubtitle, 
  Description, 
  ContactForm, 
  FormGroup, 
  Label, 
  Input, 
  TextArea, 
  SubmitButton, 
  ContactDetails, 
  ContactItem, 
  ContactIcon, 
  ContactText,
  SuccessMessage,
  ErrorMessage
} from './Contact.styles';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { emailService, EmailData } from '../../services/emailService';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Verificar se o EmailJS está configurado
    if (!emailService.isConfigured()) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const emailData: EmailData = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      const response = await emailService.sendEmail(emailData);
      
      if (response.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: FaEnvelope,
      text: 'clenio.cgm@gmail.com',
      href: 'mailto:clenio.cgm@gmail.com'
    },
    {
      icon: FaWhatsapp,
      text: '+55 (84) 99157-6151',
      href: 'https://wa.me/5584991576151'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Natal, RN - Brasil',
      href: 'https://www.google.com/maps/place/Natal,+RN/@-5.7945,-35.2110,12z'
    }
  ];

  return (
    <ContactContainer id="contact" ref={ref}>
      <ContactContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <SectionSubtitle>{t('contact.subtitle')}</SectionSubtitle>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem', 
          maxWidth: '1200px', 
          margin: '0 auto',
          alignItems: 'start'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactInfo>
              <Description>
                Estou sempre aberto a novas oportunidades e projetos interessantes. 
                Se você tem uma ideia ou precisa de ajuda com desenvolvimento, 
                não hesite em entrar em contato!
              </Description>
              
              <ContactDetails>
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <ContactItem 
                      href={detail.href}
                      target={detail.href.startsWith('https://wa.me') || detail.href.startsWith('https://www.google.com/maps') ? '_blank' : undefined}
                      rel={detail.href.startsWith('https://wa.me') || detail.href.startsWith('https://www.google.com/maps') ? 'noopener noreferrer' : undefined}
                      onClick={detail.href.startsWith('https://wa.me') || detail.href.startsWith('https://www.google.com/maps') ? (e) => {
                        e.preventDefault();
                        window.open(detail.href, '_blank');
                      } : undefined}
                    >
                      <ContactIcon>
                        <detail.icon 
                          size={20} 
                          color={detail.icon === FaWhatsapp ? "#25D366" : "var(--accent-primary)"} 
                        />
                      </ContactIcon>
                      <ContactText>{detail.text}</ContactText>
                    </ContactItem>
                  </motion.div>
                ))}
              </ContactDetails>
            </ContactInfo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">{t('contact.name')}</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">{t('contact.email')}</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">{t('contact.message')}</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                />
              </FormGroup>

              {submitStatus === 'success' && (
                <SuccessMessage>
                  ✅ Email enviado com sucesso! Entrarei em contato em breve.
                </SuccessMessage>
              )}

              {submitStatus === 'error' && (
                <ErrorMessage>
                  ❌ Erro ao enviar email. Verifique se o EmailJS está configurado ou tente novamente.
                </ErrorMessage>
              )}

              <SubmitButton type="submit" disabled={isSubmitting}>
                <FaPaperPlane />
                {isSubmitting ? 'Enviando...' : t('contact.send')}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </div>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
