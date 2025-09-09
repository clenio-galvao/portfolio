import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SkillsContainer, 
  SectionTitle, 
  SectionSubtitle, 
  SkillsGrid, 
  SkillCategory, 
  CategoryTitle, 
  SkillsList, 
  SkillItem, 
  SkillIcon, 
  SkillName, 
  SkillLevel 
} from './Skills.styles';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaDocker, 
  FaAws,
  FaDatabase,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaRocket,
  FaCheckCircle,
  FaBug,
  FaFlask,
  FaServer
} from 'react-icons/fa';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', icon: FaReact, level: 85 },
        { name: 'JavaScript', icon: FaJs, level: 70 },
        { name: 'TypeScript', icon: FaJs, level: 75 },
        { name: 'HTML5', icon: FaHtml5, level: 85 },
        { name: 'CSS3', icon: FaCss3Alt, level: 80 }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 85 },
        { name: 'Python', icon: FaPython, level: 80 },
        { name: 'Java', icon: FaJava, level: 35 },
        { name: 'Django', icon: FaPython, level: 80 },
        { name: 'Express', icon: FaNodeJs, level: 85 }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'Docker', icon: FaDocker, level: 55 },
        { name: 'Cursor', icon: FaAws, level: 80 },
        { name: 'SQL Server', icon: FaDatabase, level: 85 },
        { name: 'PostgreSQL', icon: FaDatabase, level: 80 }
      ]
    },
    {
      title: t('skills.testing'),
      skills: [
        { name: 'Jest', icon: FaCheckCircle, level: 85 },
        { name: 'React Testing Library', icon: FaReact, level: 80 },
        { name: 'Cypress', icon: FaBug, level: 75 },
        { name: 'Django Tests', icon: FaServer, level: 85 },
        { name: 'Unit Tests', icon: FaFlask, level: 80 }
      ]
    },
         {
       title: t('skills.softSkills'),
       skills: [
         { name: t('skills.softSkillsList.teamwork'), icon: FaUsers, level: 95 },
         { name: t('skills.softSkillsList.problemSolving'), icon: FaLightbulb, level: 90 },
         { name: t('skills.softSkillsList.timeManagement'), icon: FaClock, level: 95 },
         { name: t('skills.softSkillsList.communication'), icon: FaUsers, level: 90 },
         { name: t('skills.softSkillsList.adaptability'), icon: FaRocket, level: 80 }
       ]
     }
  ];

  return (
    <SkillsContainer id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <SectionSubtitle>{t('skills.subtitle')}</SectionSubtitle>
      </motion.div>

      <SkillsGrid>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
          >
            <SkillCategory>
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <SkillItem>
                      <SkillIcon>
                        <skill.icon size={24} color="var(--accent-primary)" />
                      </SkillIcon>
                      <div style={{ flex: 1 }}>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>
                          <div 
                            style={{ 
                              width: `${skill.level}%`,
                              height: '4px',
                              background: 'var(--accent-gradient)',
                              borderRadius: '2px',
                              transition: 'width 1s ease'
                            }}
                          />
                        </SkillLevel>
                      </div>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: 'var(--text-secondary)',
                        fontWeight: '500'
                      }}>
                        {skill.level}%
                      </span>
                    </SkillItem>
                  </motion.div>
                ))}
              </SkillsList>
            </SkillCategory>
          </motion.div>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
