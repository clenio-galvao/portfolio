import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';
import Contact from '../Sections/Contact';
import Footer from './Footer';
import { GlobalStyles } from './GlobalStyles';

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
