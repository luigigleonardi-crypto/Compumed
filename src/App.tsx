import React, { useState } from 'react';
import Home from './components/Home';
import Builder from './components/Builder';
import Services from './components/Services';

export type Page = 'home' | 'builder' | 'services';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'home') {
    return <Home onNavigate={(page) => setCurrentPage(page)} />;
  }

  if (currentPage === 'services') {
    return <Services onNavigate={(page) => setCurrentPage(page)} />;
  }

  return <Builder onNavigate={(page) => setCurrentPage(page)} />;
}


