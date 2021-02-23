import "./App.css";
import MovieApp from "./Components/MovieApp";
import { Route, Switch } from "react-router-dom";
import Movie from "./Components/Movie/Movie";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/movie" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
