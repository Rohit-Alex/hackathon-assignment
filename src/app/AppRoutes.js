import { Spin } from "antd";
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";


import EventDetails from "./basic-ui/OrderFailedDetails";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const OrderDetails = lazy(() => import("./basic-ui/EventDetails"));

const Error404 = lazy(() => import("./error-pages/Error404"));

const FBy = lazy(() => import("./Logistics/FBy"));

const FBS = lazy(() => import("./Logistics/FBS"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/orders/1p_3p" component={OrderDetails} />
        {/* <Route exact path="/orderDetails" component={EventDetails} /> */}
        <Route exact path="/orderDetails/:eventId" component={EventDetails} />
        <Route exact path="/logistics/FBy" component={FBy} />
        <Route exact path="/logistics/FBS" component={FBS} />
        <Route path="*" component={Error404} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
