import { AppRouter, Header, Footer } from './components';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
