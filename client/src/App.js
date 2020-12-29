import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Distance from "./pages/Distance";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Distance" component={Distance} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
