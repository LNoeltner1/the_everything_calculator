import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Distance from "./pages/Distance";
import Home from "./pages/Home";
import Mass from "./pages/Mass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Distance" component={Distance} />
            <Route exact path="/Mass" component={Mass} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
