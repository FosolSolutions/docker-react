import { UsersList } from 'features/admin/users';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header>Docker React Application</header>
      <nav></nav>
      <main>
        <UsersList></UsersList>
      </main>
      <footer>
        <hr />
        <div>Footer &copy;</div>
      </footer>
    </div>
  );
};

export default App;
