import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonList from './views/PokemonList';
import SinglePokemon from './views/SinglePokemon';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PokemonList} exact />
          <Route path="/pokemon/:id" component={SinglePokemon} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
