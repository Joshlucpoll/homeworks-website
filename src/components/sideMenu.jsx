import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import NavLink from "./navLink";

const titles = {
  root: "Menu",
  services: "Our Services",
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
  ]
}


class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }



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
              transition={{ ease: "circOut", duration: 0.5, delay: 0.2 }}
              onClick={this.props.closeSideMenu}
            />
            <motion.div
              className="services-container"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "150%" }}
              transition={{ ease: "circOut", duration: 0.5, delay: 0.1 }}
            >
              <div className="services">
                <h2 className="title">{titles[this.props.currentSideMenu]}</h2>
                <ul>
                  {menuItems[this.props.currentSideMenu].map((item) =>
                    <NavLink label={item["label"]} to={item["path"]} onClick={this.props.closeSideMenu}/>
                  )}
                  {this.props.currentSideMenu === "root" &&
                    <button onClick={() => this.props.changeMenu("services")}>Services
                      <div className="underline"/>
                    </button>
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