import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Ejercicio1 from "./Ejercicio1/Ejercicio1";
import Ejercicio2 from "./Ejercico2/Ejercicio2";

function App() {
  return (
    <Router>
      <nav className="container-fluid navbar navbar-expand navbar-dark bg-dark intro">
        <Link to="/" className="navbar-brand">
          Ejercicio 1
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/ejercicio2"} className="nav-link">
              Ejercicio 2
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li> */}
        </div>
      </nav>

      <div className="app container-fluid mt-3">
        <Switch>
          <Route exact path={"/"} component={Ejercicio1} />
          <Route exact path="/ejercicio2" component={Ejercicio2} />
          {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
