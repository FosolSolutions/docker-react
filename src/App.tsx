import React from 'react';
import { AppRouter, Header, Footer, AlertError } from './components';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <AlertError />
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
