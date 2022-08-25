import React, { useEffect, useState } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";

const Sidebar = () => {
  const [state, setState] = useState({});
  const location = useLocation();
  const toggleMenuState = (menuState) => {
    if (state[menuState]) {
      setState({ [menuState]: false });
    } else if (Object.keys(state).length === 0) {
      setState({ [menuState]: true });
    } else {
      Object.keys(state).forEach((i) => {
        setState({ [i]: false });
      });
      setState({ [menuState]: true });
    }
  };

  useEffect(() => {
    onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }, []);

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const isPathActive = (path) => {
    return location.pathname.startsWith(path);
  };

  const onRouteChanged = () => {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(state).forEach((i) => {
      setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/orders", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (isPathActive(obj.path)) {
        setState({ [obj.state]: true });
      }
    });
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
          <Link className="nav-link" to="/">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive("/orders") ? "nav-item active" : "nav-item"}>
          <div className={ state.basicUiMenuOpen ? "nav-link menu-expanded" : "nav-link"} onClick={() => toggleMenuState("basicUiMenuOpen")} data-toggle="collapse">
            <span className="menu-title">Orders</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </div>
          <Collapse in={state.basicUiMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link
                  className={
                    isPathActive("/orders/1p_3p")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/orders/1p_3p"
                >
                  1P & 3P Orders
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={
            isPathActive("/form-elements") ? "nav-item active" : "nav-item"
          }
        >
          <div
            className={
              state.formElementsMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("formElementsMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Payments</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </div>
          <Collapse in={state.formElementsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link
                  className={
                    isPathActive("/form-elements/basic-elements")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/form-elements/basic-elements"
                >
                  1P
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={isPathActive("/tables") ? "nav-item active" : "nav-item"}
        >
          <div
            className={
              state.tablesMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("tablesMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Logistics</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-table-large menu-icon"></i>
          </div>
          <Collapse in={state.tablesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link
                  className={
                    isPathActive("/logistics")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/logistics/FBy"
                >
                  FBy
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link
                  className={
                    isPathActive("/logistics")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/logistics/FBS"
                >
                  FBS
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive("/icons") ? "nav-item active" : "nav-item"}>
          <div
            className={
              state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("iconsMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Financial</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-contacts menu-icon"></i>
          </div>
          <Collapse in={state.iconsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link
                  className={
                    isPathActive("/icons/mdi") ? "nav-link active" : "nav-link"
                  }
                  to="/icons/mdi"
                >
                  1P
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
