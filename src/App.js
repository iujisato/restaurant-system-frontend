import React from 'react';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
};

export default App;
