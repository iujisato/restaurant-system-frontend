import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

const Footer = () => {
  return (
    <div> FOOTER </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default App;
