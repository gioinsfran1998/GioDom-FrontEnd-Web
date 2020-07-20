import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}