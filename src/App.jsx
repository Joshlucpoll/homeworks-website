import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Logo from "./assets/img/logo.png";
import SquareLogo from "./assets/img/square-homeworks-logo.png";

import NavLink from "./components/navLink";

// Pages
import Home from "./pages/home";
import Services from "./pages/services";

import "./styles/app.scss";

const variants = {
  close: {},
  open: {}
}

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
    }), this.forceUpdate());
  }

  onClick() {
    this.setState({ isServicesOpen: false });
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
          {this.state.width >= 800 &&
            <div className="header-desktop">
                <Link className="title-link" to="/">
                  <img className="logo" alt="Logo" src={Logo}></img>
                </Link>
              <div className="subtitle">PROPERTY IMPROVEMENTS</div>
              <nav className="nav-bar">
                <NavLink label="Home" to="/" onClick={() => this.onClick()}/>
                <li>
                  <button onClick={() => this.serviceButtonHandle()} className="nav-link" >Services
                    <div className="underline"/>
                  </button>
                </li>
                <NavLink label="Contact" to="contact" onClick={() => this.onClick()}/>
              </nav>
            </div>
          }
          {this.state.width < 800 &&
            <div className="header-mobile">
              <Link className="title-link" to="/">
                <img className="logo" alt="Logo" src={SquareLogo}></img>
              </Link>
              <button className="hamburger-container" onClick={() => this.serviceButtonHandle()}>
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
              </button>
            </div>
          }
          <AnimatePresence>
            {this.state.isServicesOpen && 
              <div>
                <motion.div
                  className="background-filter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: "circOut", duration: 0.5, delay: 0.2 }}
                  onClick={() => this.onClick()}
                />
                <motion.div
                  className="services-container"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "150%" }}
                  transition={{ ease: "circOut", duration: 0.5, delay: 0.1 }}
                >
                  <div className="services">
                    <h2 className="title">Our Services</h2>
                    <ul>
                      <NavLink label="General Repairs" to="/services/general-repairs" onClick={() => this.onClick()}/>
                      <NavLink label="Sash Windows" to="/services/sash-windows" onClick={() => this.onClick()}/>
                      <NavLink label="Plumbing" to="/services/plumbing" onClick={() => this.onClick()}/>
                      <NavLink label="Electrical Work" to="/services/electrical-work" onClick={() => this.onClick()}/>
                      <NavLink label="Plastering" to="/services/plastering" onClick={() => this.onClick()}/>
                      <NavLink label="Tiling" to="/services/tiling" onClick={() => this.onClick()}/>
                      <NavLink label="Painting and Decorating" to="/services/painting-and-decorating" onClick={() => this.onClick()}/>
                      <NavLink label="Bathrooms" to="/services/bathrooms" onClick={() => this.onClick()}/>
                      <NavLink label="Kitchens" to="/services/kitchens" onClick={() => this.onClick()}/>
                      <NavLink label="Flooring" to="/services/flooring" onClick={() => this.onClick()}/>
                      <NavLink label="Handyman Services" to="/services/handyman-services" onClick={() => this.onClick()}/>
                    </ul>
                  </div>
                </motion.div>
              </div>
            }
          </AnimatePresence>
        </div>
        {/* <footer>
          <div className="copyright">&copy; HomeWorks Leicester {new Date().getFullYear()}
          . Developed by <a href="https://joshlucpoll.com">Josh Pollard</a>
          </div>
        </footer> */}

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