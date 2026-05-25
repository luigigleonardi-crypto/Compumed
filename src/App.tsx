import React, { useState } from 'react';
import Home from './components/Home';
import Services from './components/Services';

export type Page = 'home' | 'services';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'home') {
    return <Home onNavigate={(page) => setCurrentPage(page)} />;
  }

  return <Services onNavigate={(page) => setCurrentPage(page)} />;
}


