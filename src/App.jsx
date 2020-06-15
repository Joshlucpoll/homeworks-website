import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Logo from "./assets/img/logo.png";

// Pages
import Home from "./pages/home";
import Services from "./pages/services";

import "./styles/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
      isServicesOpen: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  serviceButtonHandle() {
    this.setState(state => ({
      isServicesOpen: !this.state.isServicesOpen,
    }));
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return(
      <Router>
        
        <div className="header-container">
          <div className="header">
              <Link className="title-link" to="/">
                <img className="logo" alt="Logo" src={Logo}></img>
              </Link>
            <div className="subtitle">PROPERTY IMPROVEMENTS</div>
            <nav className="nav-bar">
              <li>
                <Link className="nav-link" to="/">Home</Link>
                <div className="underline"/>
              </li>
              <li>
                <button onClick={() => this.serviceButtonHandle()} className="nav-link" >Services</button>
                <div className="underline"/>
              </li>
              <li>
                <Link className="nav-link" to="/contact">Contact</Link>
                <div className="underline"/>
              </li>
            </nav>
          </div>
          <AnimatePresence>
            {this.state.isServicesOpen && 
              <motion.div
                className="services-container"
                initial={{ x: "150%" }}
                animate={{ x: 0 }}
                exit={{ x: "150%" }}
                transition={{ ease: "circOut", duration: 0.5 }}
              >
                <div className="services">
                  <div>Sample text</div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
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