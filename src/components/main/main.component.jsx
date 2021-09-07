import React from "react";
import "./main.styles.scss";
import PanelPage from "../../pages/panel-page/panel-page.component.jsx";
import buildServerPage from "../../pages/build-server-page/build-server-page.component.jsx";
import ServerDetailPage from "../../pages/server-detail-page/server-detail-page.component.jsx";
import NotFoundPage from "../../pages/not-found-page/not-found-page.component.jsx";

import { Switch, Route, Redirect } from "react-router-dom";
const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/panel" component={PanelPage} />
        <Route exact path="/build-server" component={buildServerPage} />
        <Route exact path="/server-detail" component={ServerDetailPage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect exact from="/" to="/panel" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
};
export default Main;
