import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  AboutContainer, 
  AboutContent, 
  AboutText, 
  SectionTitle, 
  SectionSubtitle, 
  Description, 
  Stats, 
  StatItem, 
  StatNumber, 
  StatLabel,
  AboutImage,
  DownloadButton,
  CardsGrid,
  Card,
  CardIcon,
  CardTitle,
  CardContent
} from './About.styles';
import { FaDownload, FaCode, FaUsers, FaTrophy, FaRocket, FaBullseye } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import cvService from '../../services/cvService';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleDownloadCv = () => {
    cvService.downloadCv(language);
  };

  const stats = [
    { number: '4+', label: t('about.experience'), icon: FaTrophy },
    { number: '10+', label: t('about.projects'), icon: FaCode },
    { number: '6+', label: t('about.clients'), icon: FaUsers }
  ];

  const cards = [
    {
      title: t('about.journey.title'),
      content: t('about.journey.content'),
      icon: FaRocket,
      color: 'var(--accent-primary)'
    },
    {
      title: t('about.goals.title'),
      content: t('about.goals.content'),
      icon: FaBullseye,
      color: 'var(--accent-secondary)'
    }
  ];

  return (
    <AboutContainer id="about" ref={ref}>
      <AboutContent>
        <AboutText>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle>{t('about.title')}</SectionTitle>
            <SectionSubtitle>{t('about.subtitle')}</SectionSubtitle>
            <Description>{t('about.description')}</Description>
            
            <DownloadButton onClick={handleDownloadCv}>
              <FaDownload />
              {t('about.download')}
            </DownloadButton>
          </motion.div>
        </AboutText>

        <AboutImage>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CardsGrid>
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  <Card>
                    <CardIcon color={card.color}>
                      <card.icon size={32} />
                    </CardIcon>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </CardsGrid>
          </motion.div>
        </AboutImage>
      </AboutContent>

      <Stats>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
          >
            <StatItem>
              <stat.icon size={32} color="var(--accent-primary)" />
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          </motion.div>
        ))}
      </Stats>
    </AboutContainer>
  );
};

export default About;
