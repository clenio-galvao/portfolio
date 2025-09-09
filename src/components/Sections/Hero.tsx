import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  HeroContainer, 
  HeroContent, 
  HeroText, 
  Greeting, 
  Name, 
  Title, 
  Description, 
  CTAButton, 
  ScrollIndicator,
  HeroImage,
  FloatingElements
} from './Hero.styles';
import { FaChevronDown, FaCode, FaRocket, FaLightbulb, FaUser } from 'react-icons/fa';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <HeroContainer id="home">
      <FloatingElements>
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ position: 'absolute', top: '20%', left: '10%' }}
        >
          <FaCode size={24} color="var(--accent-primary)" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ position: 'absolute', top: '60%', right: '15%' }}
        >
          <FaRocket size={20} color="var(--accent-secondary)" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ position: 'absolute', top: '40%', right: '25%' }}
        >
          <FaLightbulb size={18} color="var(--accent-primary)" />
        </motion.div>
      </FloatingElements>

      <HeroContent>
        <HeroText>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Greeting>{t('hero.greeting')}</Greeting>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Name>{t('hero.name')}</Name>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Title>{t('hero.title')}</Title>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Description>{t('hero.description')}</Description>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CTAButton onClick={scrollToAbout}>
              {t('hero.cta')}
            </CTAButton>
          </motion.div>
        </HeroText>

        <HeroImage>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              border: '4px solid var(--accent-primary)',
              position: 'relative',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {!imageError ? (
              <img 
                src="/images/perfil/perfil_clenio.jpg" 
                alt="Clênio Galvão" 
                onError={handleImageError}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            ) : (
              <FaUser size={120} color="white" />
            )}
          </motion.div>
        </HeroImage>
      </HeroContent>

      <ScrollIndicator onClick={scrollToAbout}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown />
          <span>{t('hero.scroll')}</span>
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default Hero;
