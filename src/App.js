import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import Chars from './Chars';

function App() {
  return (
    <>
    <h1>Pokedex</h1>
    <Pokedex characters={Chars} />
    </>
  );
}

export default App;
