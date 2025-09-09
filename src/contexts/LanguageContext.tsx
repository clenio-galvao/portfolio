import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Função para detectar o idioma do navegador
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  
  // Extrair apenas o código do idioma (ex: 'pt-BR' -> 'pt')
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Verificar se o idioma detectado está disponível no site
  const availableLanguages: Language[] = ['pt', 'en', 'es'];
  
  if (availableLanguages.includes(langCode as Language)) {
    return langCode as Language;
  }
  
  // Fallback para português se o idioma não estiver disponível
  return 'pt';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    
    // Se não há idioma salvo, detectar automaticamente o idioma do navegador
    if (!savedLanguage) {
      return detectBrowserLanguage();
    }
    
    return (savedLanguage as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
