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

import SideMenu from "./components/sideMenu";
import NavLink from "./components/navLink";

// Pages
import Home from "./pages/home";
import Contact from "./pages/contact";

import GeneralRepairs from "./pages/services/generalRepairs";
import SashWindows from "./pages/services/sashWindows";
import Plumbing from "./pages/services/plumbing";
import ElectricalWork from "./pages/services/electricalWork";
import Plastering from "./pages/services/plastering";
import Tiling from "./pages/services/tiling";
import PaintingAndDecorating from "./pages/services/paintingAndDecorating";
import Bathrooms from "./pages/services/bathrooms";
import Kitchens from "./pages/services/kitchens";
import Flooring from "./pages/services/flooring";
import HandymanServices from "./pages/services/handymanServices";

import KitchenInstallation from "./pages/projects/kitchenInstallation";
import CourtyardGarden from "./pages/projects/courtyardGarden";
import SplitLevelPatio from "./pages/projects/splitLevelPatio";

import "./styles/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
      isSideMenuOpen: false,
      currentSideMenu: "root",
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  changeMenu(menu) {
    this.setState({
      isSideMenuOpen: true,
      currentSideMenu: menu,
    });
  }
  
  backArrow() {
    if (this.state.width < 800) {
      this.setState({ currentSideMenu: "root" });
    }
    else {
      this.setState({ isSideMenuOpen: false });
    }
  }

  closeMenu() {
    this.setState({ isSideMenuOpen: false, currentSideMenu: "root" });
  }

  openMenu() {
    this.setState({ isSideMenuOpen: true });
  }

  switchMenu() {
    if (this.state.isSideMenuOpen) {
      this.closeMenu()
    }
    else {
      this.openMenu()
    }
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
                <NavLink label="Home" to="/" onClick={() => this.closeMenu()}/>
                <li>
                  <button onClick={() => this.changeMenu("services")} className="nav-link" >Services
                    <div className="underline"/>
                  </button>
                </li>
                <li>
                  <button onClick={() => this.changeMenu("projects")} className="nav-link" >Projects
                    <div className="underline"/>
                  </button>
                </li>
                <NavLink label="Contact" to="/contact" onClick={() => this.closeMenu()}/>
              </nav>
            </div>
          }
          {this.state.width < 800 &&
            <div className="header-mobile">
              <Link className="title-link" to="/">
                <img className="logo" alt="Logo" src={SquareLogo}></img>
              </Link>
              <button className="hamburger-container" onClick={() => this.switchMenu()}>
                <motion.div animate={ this.state.isSideMenuOpen ? {y: 0, rotate: 45} : {y: 10, rotate: 0} } transition={{type: "spring", stiffness: 400, damping: 40}} className="line-one"/>
                <motion.div animate={ this.state.isSideMenuOpen ? {y: 0, rotate: -45} : {y: 0, rotate: 0} } transition={{type: "spring", stiffness: 400, damping: 40}} className="line-two"/>
                <motion.div animate={ this.state.isSideMenuOpen ? {y: 0, rotate: 45} : {y: -10, rotate: 0} } transition={{type: "spring", stiffness: 400, damping: 40}} className="line-three"/> 
              </button>
            </div>
          }
          <SideMenu
            isSideMenuOpen={this.state.isSideMenuOpen}
            closeSideMenu={() => this.closeMenu()}
            currentSideMenu={this.state.currentSideMenu}
            changeMenu={(menu) => this.changeMenu(menu)}
            backArrow={() => this.backArrow()}
          />
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
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/services/general-repairs">
                <GeneralRepairs />
              </Route>
              <Route exact path="/services/sash-windows">
                <SashWindows />
              </Route>
              <Route exact path="/services/plumbing">
                <Plumbing />
              </Route>
              <Route exact path="/services/electrical-work">
                <ElectricalWork />
              </Route>
              <Route exact path="/services/plastering">
                <Plastering />
              </Route>
              <Route exact path="/services/tiling">
                <Tiling />
              </Route>
              <Route exact path="/services/painting-and-decorating">
                <PaintingAndDecorating />
              </Route>
              <Route exact path="/services/bathrooms">
                <Bathrooms />
              </Route>
              <Route exact path="/services/kitchens">
                <Kitchens />
              </Route>
              <Route exact path="/services/flooring">
                <Flooring />
              </Route>
              <Route exact path="/services/handyman-services">
                <HandymanServices />
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