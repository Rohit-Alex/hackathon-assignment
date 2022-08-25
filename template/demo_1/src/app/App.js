import React, { useEffect } from "react";

import { useLocation, withRouter } from "react-router-dom";
import "./App.scss";
import "antd/dist/antd.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="container-scroller"><Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default (withRouter(App));
