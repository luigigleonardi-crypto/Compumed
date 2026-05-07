import React, { useState } from 'react';
import Home from './components/Home';
import Builder from './components/Builder';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'builder'>('home');

  if (currentPage === 'home') {
    return <Home onNavigate={(page) => setCurrentPage(page)} />;
  }

  return <Builder onNavigate={(page) => setCurrentPage(page)} />;
}


