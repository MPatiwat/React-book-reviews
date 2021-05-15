import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

// views without layouts

import Landing from "./Pages/MainPage/Landing";
import Profile from "./Pages/Profile/Profile";
// import TestComponent from "TestComponent";
import Layout from "layouts/Layout";
import Footer from "./components/Footers/FooterSmall";
// import Login from "Pages/AuthPage/Login";
import Auth from "./Pages/AuthPage/Auth";
// import Page6 from "components/Page6/page6";

import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Landing} />

          <Route path="/profile/:username" component={Profile} />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
      <Footer />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);

// ReactDOM.render(<TestComponent />, document.getElementById("root"));
