import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

export type Page = 'home' | 'services' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'home') {
    return <Home onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'contact') {
    return <Contact onNavigate={(page) => setCurrentPage(page)} />;
  }

  return <Services onNavigate={(page) => setCurrentPage(page)} />;
}


