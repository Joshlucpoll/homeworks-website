import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavLink from "./navLink";
import BackArrow from "../assets/img/back_arrow.svg";

const titles = {
  root: "Menu",
  services: "Our Services",
  projects: "Our Projects"
}

const menuItems = {
  root: [
    {label: "Home", path: "/"},
  ],
  services: [
    {label: "General Repairs", path: "/services/general-repairs"},
    {label: "Sash Windows", path: "/services/sash-windows"},
    {label: "Plumbing", path: "/services/plumbing"},
    {label: "Electrical Work", path: "/services/electrical-work"},
    {label: "Plastering", path: "/services/plastering"},
    {label: "Tiling", path: "/services/tiling"},
    {label: "Painting and Decorating", path: "/services/painting-and-decorating"},
    {label: "Bathrooms", path: "/services/bathrooms"},
    {label: "Kitchens", path: "/services/kitchens"},
    {label: "Flooring", path: "/services/flooring"},
    {label: "Handyman Services", path: "/services/handyman-services"},
  ],
  projects: [
    {label: "Kitchen Installation", path: "/projects/kitchen-installation"},
    {label: "Courtyard Garden", path: "/projects/courtyard-garden"},
    {label: "Split-level Patio", path: "/projects/split-level-patio"},
  ],
}


class SideMenu extends React.Component {

  render() {
    return(
      <AnimatePresence>
        {this.props.isSideMenuOpen && 
          <div>
            <motion.div
              className="background-filter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "circOut", duration: 0.3 }}
              onClick={this.props.closeSideMenu}
            />
            <motion.div
              className="services-container"
              layoutTransition={{ type: "tween", duration: 0.1 }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "150%" }}
              transition={{ ease: "circOut", duration: 0.3 }}
            >
              <div className="services">
                {this.props.currentSideMenu !== "root" &&
                  <img src={BackArrow} alt="back arrow" className="back-arrow" onClick={this.props.backArrow}/>
                }
                <h2 className="title">{titles[this.props.currentSideMenu]}</h2>
                <ul>
                  {menuItems[this.props.currentSideMenu].map((item) =>
                    <NavLink label={item["label"]} to={item["path"]} onClick={this.props.closeSideMenu}/>
                  )}
                  {this.props.currentSideMenu === "root" &&
                    <div>
                      <li>
                        <button className="nav-link" onClick={() => this.props.changeMenu("services")}>Services
                          <div className="underline"/>
                        </button>
                      </li>
                      <li>
                        <button className="nav-link" onClick={() => this.props.changeMenu("projects")}>Projects
                          <div className="underline"/>
                        </button>
                      </li>
                        <NavLink label="Contact" to="/contact" onClick={this.props.closeSideMenu}/>
                    </div>
                  }
                </ul>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    );
  }
}

export default SideMenu;