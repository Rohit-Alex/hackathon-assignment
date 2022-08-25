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
      { path: "/orders", state: "orderMenuOpen" },
      { path: "/payments", state: "paymentsMenuOpen" },
      { path: "/logistics", state: "logisticsMenuOpen" },
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
        <li
          className={location.pathname === "/" ? "nav-item active" : "nav-item"}
        >
          <Link className="nav-link" to="/">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li
          className={isPathActive("/orders") ? "nav-item active" : "nav-item"}
        >
          <div
            className={
              state.orderMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("orderMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Orders</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </div>
          <Collapse in={state.orderMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
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
          className={isPathActive("/payments") ? "nav-item active" : "nav-item"}
        >
          <div
            className={
              state.paymentsMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("paymentsMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Payments</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </div>
          <Collapse in={state.paymentsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/payments/CMR")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/payments/CMR"
                >
                  CMR
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/payments/FPAY")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/payments/FPAY"
                >
                  FPAY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/payments/CREDIT")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/payments/CREDIT"
                >
                  CREDIT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/payments/DEBIT")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/payments/DEBIT"
                >
                  DEBIT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    isPathActive("/payments/GIFT_CARD")
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/payments/GIFT_CARD"
                >
                  GIFT CARD
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={
            isPathActive("/logistics") ? "nav-item active" : "nav-item"
          }
        >
          <div
            className={
              state.logisticsMenuOpen ? "nav-link menu-expanded" : "nav-link"
            }
            onClick={() => toggleMenuState("logisticsMenuOpen")}
            data-toggle="collapse"
          >
            <span className="menu-title">Logistics</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-table-large menu-icon"></i>
          </div>
          <Collapse in={state.logisticsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link
                  className={
                    isPathActive("/logistics") ? "nav-link active" : "nav-link"
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
                    isPathActive("/logistics") ? "nav-link active" : "nav-link"
                  }
                  to="/logistics/FBS"
                >
                  FBS
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li
          className={
            isPathActive("/financial") ? "nav-item active" : "nav-item"
          }
        >
          <Link className="nav-link" to="/financial">
            <span className="menu-title">Financial</span>
            <i className="mdi mdi-contacts menu-icon"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
