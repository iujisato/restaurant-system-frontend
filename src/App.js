import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header';

const Footer = () => {
  return (
    <div> FOOTER </div>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />

    </div>
  )
};

export default App;
