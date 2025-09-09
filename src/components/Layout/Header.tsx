import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  HeaderContainer, 
  Nav, 
  Logo, 
  NavLinks, 
  NavLink, 
  ThemeToggle, 
  LanguageSelector,
  MobileMenuButton,
  MobileMenu,
  MobileNavLinks
} from './Header.styles';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as 'pt' | 'en' | 'es');
    i18n.changeLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <Logo>
          <Link to="/">Galvão Labs</Link>
        </Logo>
        
        <NavLinks>
          <NavLink onClick={() => scrollToSection('home')}>
            {t('nav.home')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('about')}>
            {t('nav.about')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>
            {t('nav.projects')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('skills')}>
            {t('nav.skills')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>
            {t('nav.contact')}
          </NavLink>
        </NavLinks>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageSelector>
            <select 
              value={language} 
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </LanguageSelector>

          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>

          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </div>
      </Nav>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLinks>
          <NavLink onClick={() => scrollToSection('home')}>
            {t('nav.home')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('about')}>
            {t('nav.about')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('projects')}>
            {t('nav.projects')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('skills')}>
            {t('nav.skills')}
          </NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>
            {t('nav.contact')}
          </NavLink>
        </MobileNavLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
