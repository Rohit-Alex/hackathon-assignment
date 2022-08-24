import React, { Component, useEffect, useState } from "react";
import { useLocation, withRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import SettingsPanel from "./shared/SettingsPanel";
import Footer from "./shared/Footer";
import { useTranslation, withTranslation } from "react-i18next";

const App = () => {
  const [state, setState] = useState({});
  const { i18n } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    onRouteChanged();
  }, [location]);

  const onRouteChanged = () => {
    const body = document.querySelector("body");
    if (location.pathname === "/layout/RtlLayout") {
      body.classList.add("rtl");
      i18n.changeLanguage("ar");
    } else {
      body.classList.remove("rtl");
      i18n.changeLanguage("en");
    }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/user-pages/login-1",
      "/user-pages/register-1",
      "/user-pages/lockscreen",
      "/error-pages/error-404",
      "/error-pages/error-500",
      "/general-pages/landing-page",
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (location.pathname === fullPageLayoutRoutes[i]) {
        setState({
          isFullPageLayout: true,
        });
        document
          .querySelector(".page-body-wrapper")
          .classList.add("full-page-wrapper");
        break;
      } else {
        setState({
          isFullPageLayout: false,
        });
        document
          .querySelector(".page-body-wrapper")
          .classList.remove("full-page-wrapper");
      }
    }
  };

  let navbarComponent = !state.isFullPageLayout ? <Navbar /> : "";
  let sidebarComponent = !state.isFullPageLayout ? <Sidebar /> : "";
  let SettingsPanelComponent = !state.isFullPageLayout ? <SettingsPanel /> : "";
  let footerComponent = !state.isFullPageLayout ? <Footer /> : "";
  return (
    <div className="container-scroller">
      {navbarComponent}
      <div className="container-fluid page-body-wrapper">
        {sidebarComponent}
        <div className="main-panel" id="side-bar-dashboard">
          <div className="content-wrapper">
            <AppRoutes />
            {SettingsPanelComponent}
          </div>
          {footerComponent}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(withRouter(App));
