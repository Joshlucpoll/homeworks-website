import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

// Pages
import Home from "./pages/home";

import "./styles/app.scss";
// import Logo from "./assets/img/homeworks_logo_title.jpg";

class App extends React.Component {
  render() {
    return(
      <Router>
        
        <div className="header-container">
          <div className="header">
            <Link to="/">
              <div className="logo">HOME<span>WORKS</span></div>
            </Link>
            <nav className="nav-bar">
              <li>
                <Link to="/">Home</Link>
                <div className="underline"/>
              </li>
              <li>
                <Link to="/about">About</Link>
                <div className="underline"/>
              </li>
              <li>
                <Link to="/users">Users</Link>
                <div className="under line"/>
              </li>
            </nav>
          </div>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;