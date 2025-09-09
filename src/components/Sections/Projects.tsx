import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ProjectsContainer, 
  SectionTitle, 
  SectionSubtitle, 
  ProjectsGrid, 
  ProjectCard, 
  ProjectImage, 
  ProjectContent, 
  ProjectTitle, 
  ProjectDescription, 
  ProjectTech, 
  TechTag, 
  ProjectLinks, 
  ProjectLink 
} from './Projects.styles';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Dados dos projetos - você pode alterar posteriormente
  const projects = [
    {
      id: 1,
      title: t('projects.projects.activesoft.title'),
      description: t('projects.projects.activesoft.description'),
      image: '/images/projects/activesoft.png',
      tech: ['React', 'TypeScript', 'Django', 'Python', 'SQL Server'],
      liveUrl: 'https://activesoft.com.br/software-gestao-escolar/',
      githubUrl: '#',
      isPrivate: true
    },
    {
      id: 2,
      title: t('projects.projects.doloteaolucro.title'),
      description: t('projects.projects.doloteaolucro.description'),
      image: '/images/projects/doloteaolucro.png',
      tech: ['React', 'TypeScript', 'Django', 'Python', 'PostgreSQL'],
      liveUrl: 'https://www.doloteaolucro.app/',
      githubUrl: 'https://github.com/clenio-galvao/do_lote_ao_lucro',
      isPrivate: false
    },
    {
      id: 3,
      title: t('projects.projects.sol.title'),
      description: t('projects.projects.sol.description'),
      image: '/images/projects/sol.png',
      tech: ['React', 'TypeScript', 'Styled-components', 'Prisma', 'Context API'],
      liveUrl: '#',
      githubUrl: '#',
      isPrivate: true
    },
    {
      id: 4,
      title: t('projects.projects.casapaulino.title'),
      description: t('projects.projects.casapaulino.description'),
      image: '/images/projects/casapaulino.png',
      tech: ['React', 'TypeScript', 'Styled-components', 'Mercado pago'],
      liveUrl: 'https://casapaulinostore.com.br/',
      githubUrl: '#',
      isPrivate: true
    },
    {
      id: 5,
      title: t('projects.projects.paparazzi.title'),
      description: t('projects.projects.paparazzi.description'),
      image: '/images/projects/paparazzi.png',
      tech: ['React', 'TypeScript', 'Styled-components', 'Prisma', 'Github Actions'],
      liveUrl: 'https://novosistema.paparazzi.show/cliente',
      githubUrl: '#',
      isPrivate: true
    },
    {
      id: 6,
      title: t('projects.projects.intech.title'),
      description: t('projects.projects.intech.description'),
      image: '/images/projects/intechcd.png',
      tech: ['React', 'TypeScript', 'Prisma', 'Styled-components'],
      liveUrl: '#',
      githubUrl: '#',
      isPrivate: true
    }
  ];

  return (
    <ProjectsContainer id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <SectionSubtitle>{t('projects.subtitle')}</SectionSubtitle>
      </motion.div>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <ProjectCard>
              <ProjectImage>
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      borderRadius: '8px',
                      padding: '0.5rem'
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '4rem' }}>{project.image}</div>
                )}
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTech>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                
                <ProjectLinks>
                  <ProjectLink 
                    href={project.liveUrl === '#' ? undefined : project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    disabled={project.liveUrl === '#'}
                    style={{
                      opacity: project.liveUrl === '#' ? 0.5 : 1,
                      cursor: project.liveUrl === '#' ? 'not-allowed' : 'pointer'
                    }}
                    onClick={project.liveUrl === '#' ? (e) => e.preventDefault() : undefined}
                  >
                    <FaExternalLinkAlt />
                    {t('projects.viewProject')}
                  </ProjectLink>
                  <ProjectLink 
                    href={project.isPrivate ? '#' : project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={project.isPrivate ? `${t('projects.privateRepo')} - ${t('projects.contactForAccess')}` : ''}
                    style={{ 
                      opacity: project.isPrivate ? 0.7 : 1,
                      cursor: project.isPrivate ? 'not-allowed' : 'pointer'
                    }}
                    onClick={project.isPrivate ? (e) => e.preventDefault() : undefined}
                  >
                    <FaGithub />
                    {project.isPrivate ? t('projects.privateRepo') : t('projects.viewCode')}
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
