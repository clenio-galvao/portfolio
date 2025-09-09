import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterContainer, FooterContent, SocialLinks, SocialLink } from './Footer.styles';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>Portfolio</h3>
          <p>{t('footer.made')} Clênio Galvão</p>
        </div>
        
        <SocialLinks>
          <SocialLink href="mailto:clenio.cgm@gmail.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
          <SocialLink href="https://github.com/clenio-galvao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/cleniogalvao" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://instagram.com/cleniomartins" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </SocialLink>
        </SocialLinks>
        
        <p>&copy; 2025 {t('footer.rights')}</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
