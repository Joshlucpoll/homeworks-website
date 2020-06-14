import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

// Pages
import Home from "./pages/home";
import Services from "./pages/services";

import "./styles/app.scss";
// import Logo from "./assets/img/homeworks_logo_title.jpg";

class App extends React.Component {
  render() {
    return(
      <Router>
        
        <div className="header-container">
          <div className="header">
            <Link className="title-link" to="/">
              <div className="logo">HOME<span>WORKS</span></div>
            </Link>
            <div className="subtitle">PROPERTY IMPROVEMENTS</div>
            <nav className="nav-bar">
              <li>
                <Link className="nav-link" to="/">Home</Link>
                <div className="underline"/>
              </li>
              <li>
                <Link className="nav-link" to="/services">Services</Link>
                <div className="underline"/>
              </li>
            </nav>
          </div>
        </div>
        <Route 
          render={({ location }) => (
          <AnimatePresence exitBeforeEnter={true}>
            <Switch location={location} key={location.pathname}>
              <Route path="/services">
                <Services/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
          )}
        />
      </Router>
    );
  }
}

export default App;