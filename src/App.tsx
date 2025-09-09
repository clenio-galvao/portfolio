import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout/Layout';
import './i18n/i18n';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Layout />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
