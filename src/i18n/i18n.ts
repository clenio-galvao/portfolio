import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        projects: 'Projetos',
        skills: 'Habilidades',
        contact: 'Contato'
      },
      hero: {
        greeting: 'Olá, eu sou',
        name: 'Clênio Galvão',
        title: 'Desenvolvedor Full Stack',
        description: 'Criando experiências digitais incríveis com código limpo, responsivo e design moderno.',
        cta: 'Vamos conversar',
        scroll: 'Role para baixo'
      },
      about: {
        title: 'Sobre Mim',
        subtitle: 'Conheça um pouco da minha história',
        description: 'Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento full stack e liderança de equipes, sempre busco criar soluções eficientes e elegantes que resolvam problemas reais.',
        journey: {
          title: 'Minha Jornada',
          content: 'Iniciei minha carreira como desenvolvedor há mais de 4 anos, trabalhando com diferentes tecnologias e metodologias. Ao longo dos anos, desenvolvi expertise em JavaScript, TypeScript, React, Node.js e outras tecnologias modernas.',
          icon: 'journey'
        },
        goals: {
          title: 'Meus Objetivos',
          content: 'Busco constantemente desafios que me permitam crescer profissionalmente e contribuir para projetos inovadores. Meu objetivo é continuar evoluindo como desenvolvedor e líder técnico, sempre buscando a excelência e o impacto positivo através da tecnologia.',
          icon: 'goals'
        },
        experience: 'Anos de Experiência',
        projects: 'Projetos Concluídos',
        clients: 'Clientes Satisfeitos',
        download: 'Baixar CV'
      },
      projects: {
        title: 'Meus Projetos',
        subtitle: 'Alguns dos trabalhos que mais me orgulho',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código',
        tech: 'Tecnologias',
        privateRepo: 'Repo. privado',
        contactForAccess: 'Entre em contato para acesso',
        projects: {
          activesoft: {
            title: 'Activesoft',
            description: 'Plataforma completa de ERP para escolas. Atuei durante 4 anos na empresa e 3 como liderança técnica na equipe do sistema de gestão acadêmico.'
          },
          doloteaolucro: {
            title: 'Do lote ao lucro',
            description: 'Fintech voltada ao controle e gestão financeira de lotes adquiridos em leilões. Projeto pessoal.'
          },
          sol: {
            title: 'SOL',
            description: 'Sistema de controle de prontuários em hospitais.'
          },
          casapaulino: {
            title: 'Casa Paulino | E-commerce',
            description: 'Loja virtual de produtos diversos. Atuei principalmente no frontend em duas versões da loja.'
          },
          paparazzi: {
            title: 'Paparazzi ERP',
            description: 'Sistema de gestão de uma empresa de venda de imagens digitais.'
          },
          intech: {
            title: 'INTECH PDV',
            description: 'Sistema de ponto de venda e controle de estoque.'
          }
        }
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Tecnologias que domino',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas',
        softSkills: 'Soft Skills',
        testing: 'Testes',
        softSkillsList: {
          teamwork: 'Trabalho em Equipe',
          problemSolving: 'Resolução de Problemas',
          timeManagement: 'Gestão de Tempo',
          communication: 'Comunicação',
          adaptability: 'Adaptabilidade'
        }
      },
      contact: {
        title: 'Vamos Conversar',
        subtitle: 'Estou sempre aberto a novas oportunidades',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Tente novamente.'
      },
      footer: {
        rights: 'Todos os direitos reservados.',
        made: 'Feito com ❤️ por'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        greeting: 'Hello, I am',
        name: 'Clênio Galvão',
        title: 'Full Stack Developer',
        description: 'Creating amazing digital experiences with clean code, responsive and modern design.',
        cta: "Let's talk",
        scroll: 'Scroll down'
      },
      about: {
        title: 'About Me',
        subtitle: 'Get to know a bit of my story',
        description: 'I am a developer passionate about technology and innovation. With full stack development experience and team leadership, I always seek to create efficient and elegant solutions that solve real problems.',
        journey: {
          title: 'My Journey',
          content: 'I started my career as a developer over 4 years ago, working with different technologies and methodologies. Over the years, I have developed expertise in JavaScript, TypeScript, React, Node.js and other modern technologies.',
          icon: 'journey'
        },
        goals: {
          title: 'My Goals',
          content: 'I constantly seek challenges that allow me to grow professionally and contribute to innovative projects. My goal is to continue evolving as a developer and technical leader, always seeking excellence and positive impact through technology.',
          icon: 'goals'
        },
        experience: 'Years of Experience',
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        download: 'Download CV'
      },
      projects: {
        title: 'My Projects',
        subtitle: 'Some of the works I am most proud of',
        viewProject: 'View Project',
        viewCode: 'View Code',
        tech: 'Technologies',
        privateRepo: 'Private repo',
        contactForAccess: 'Contact for access',
        projects: {
          activesoft: {
            title: 'Activesoft',
            description: 'Complete ERP platform for schools. I worked for 4 years at the company and 3 as technical leadership in the academic management system team.'
          },
          doloteaolucro: {
            title: 'From lot to profit',
            description: 'Fintech focused on financial control and management of lots acquired at auctions. Personal project.'
          },
          sol: {
            title: 'SOL',
            description: 'Hospital medical records control system.'
          },
          casapaulino: {
            title: 'Casa Paulino | E-commerce',
            description: 'Online store for various products. I worked mainly on the frontend in two versions of the store.'
          },
          paparazzi: {
            title: 'Paparazzi ERP',
            description: 'Management system for a digital image sales company.'
          },
          intech: {
            title: 'INTECH POS',
            description: 'Point of sale and inventory control system.'
          }
        }
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies I master',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
        softSkills: 'Soft Skills',
        testing: 'Testing',
        softSkillsList: {
          teamwork: 'Teamwork',
          problemSolving: 'Problem Solving',
          timeManagement: 'Time Management',
          communication: 'Communication',
          adaptability: 'Adaptability'
        }
      },
      contact: {
        title: "Let's Talk",
        subtitle: 'I am always open to new opportunities',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      },
      footer: {
        rights: 'All rights reserved.',
        made: 'Made with ❤️ by'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca',
        projects: 'Proyectos',
        skills: 'Habilidades',
        contact: 'Contacto'
      },
      hero: {
        greeting: 'Hola, soy',
        name: 'Clênio Galvão',
        title: 'Desarrollador Full Stack',
        description: 'Creando experiencias digitales increíbles con código limpio, responsivo y diseño moderno.',
        cta: 'Hablemos',
        scroll: 'Desplázate hacia abajo'
      },
      about: {
        title: 'Acerca de Mí',
        subtitle: 'Conoce un poco de mi historia',
        description: 'Soy un desarrollador apasionado por la tecnología y la innovación. Con experiencia en desarrollo full stack y liderazgo de equipos, siempre busco crear soluciones eficientes y elegantes que resuelvan problemas reales.',
        journey: {
          title: 'Mi Trayectoria',
          content: 'Inicié mi carrera como desarrollador hace más de 4 años, trabajando con diferentes tecnologías y metodologías. A lo largo de los años, he desarrollado experiencia en JavaScript, TypeScript, React, Node.js y otras tecnologías modernas.',
          icon: 'journey'
        },
        goals: {
          title: 'Mis Objetivos',
          content: 'Busco constantemente desafíos que me permitan crecer profesionalmente y contribuir a proyectos innovadores. Mi objetivo es continuar evolucionando como desarrollador y líder técnico, siempre buscando la excelencia y el impacto positivo a través de la tecnología.',
          icon: 'goals'
        },
        experience: 'Años de Experiencia',
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        download: 'Descargar CV'
      },
      projects: {
        title: 'Mis Proyectos',
        subtitle: 'Algunos de los trabajos de los que más me enorgullezco',
        viewProject: 'Ver Proyecto',
        viewCode: 'Ver Código',
        tech: 'Tecnologías',
        privateRepo: 'Repo. privado',
        contactForAccess: 'Contacta para acceso',
        projects: {
          activesoft: {
            title: 'Activesoft',
            description: 'Plataforma completa de ERP para escuelas. Trabajé durante 4 años en la empresa y 3 como liderazgo técnico en el equipo del sistema de gestión académica.'
          },
          doloteaolucro: {
            title: 'Del lote al lucro',
            description: 'Fintech enfocada en el control y gestión financiera de lotes adquiridos en subastas. Proyecto personal.'
          },
          sol: {
            title: 'SOL',
            description: 'Sistema de control de expedientes médicos en hospitales.'
          },
          casapaulino: {
            title: 'Casa Paulino | E-commerce',
            description: 'Tienda virtual de productos diversos. Trabajé principalmente en el frontend en dos versiones de la tienda.'
          },
          paparazzi: {
            title: 'Paparazzi ERP',
            description: 'Sistema de gestión de una empresa de venta de imágenes digitales.'
          },
          intech: {
            title: 'INTECH PDV',
            description: 'Sistema de punto de venta y control de inventario.'
          }
        }
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Tecnologías que domino',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Herramientas',
        softSkills: 'Soft Skills',
        testing: 'Testing',
        softSkillsList: {
          teamwork: 'Trabajo en Equipo',
          problemSolving: 'Resolución de Problemas',
          timeManagement: 'Gestión del Tiempo',
          communication: 'Comunicación',
          adaptability: 'Adaptabilidad'
        }
      },
      contact: {
        title: 'Hablemos',
        subtitle: 'Siempre estoy abierto a nuevas oportunidades',
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        success: '¡Mensaje enviado con éxito!',
        error: 'Error al enviar mensaje. Inténtalo de nuevo.'
      },
      footer: {
        rights: 'Todos los derechos reservados.',
        made: 'Hecho con ❤️ por'
      }
    }
  }
};

// Função para detectar o idioma do navegador
const detectBrowserLanguage = (): string => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Extrair apenas o código do idioma (ex: 'pt-BR' -> 'pt')
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Verificar se o idioma detectado está disponível no site
  const availableLanguages = ['pt', 'en', 'es'];
  
  if (availableLanguages.includes(langCode)) {
    return langCode;
  }
  
  // Fallback para português se o idioma não estiver disponível
  return 'pt';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectBrowserLanguage(),
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
