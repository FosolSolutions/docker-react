import React from 'react';
import { AppNav, Header, Footer, AlertError } from './components';
import { ThemeProvider } from 'styled-components';
import './App.css';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AlertError variant="danger" />
        <Header />
        <AppNav />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
