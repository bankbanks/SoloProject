import React from "react";
import RolesLists from "../../config/roles";
import { Switch, Route } from "react-router-dom";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Home from "../../pages/Home"
import Tutor from "../../pages/Tutor"
function PrivateRoutes(props) {
  return (
    <Switch>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/home">
          <Home/>
      </Route>

      <Route path ="/tutor">
          <Tutor/>
      </Route>

    </Switch>
  );
}

export default PrivateRoutes;
