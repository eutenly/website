import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HomePage from "./pages/index"
import InvitePage from "./pages/invite"
import PatreonPage from "./pages/patreon"
import SupportServerPage from "./pages/support-server"
import TwitterPage from "./pages/twitter"
import VotePage from "./pages/vote"
import VoterPerksPage from "./pages/voter-perks"
import PartnersPage from "./pages/partners"

export default () => {
  return (
    <Router>
    <div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/invite">
          <InvitePage />
        </Route>
        <Route exact path="/patreon">
          <PatreonPage />
        </Route>
        <Route exact path="/support-server">
          <SupportServerPage />
        </Route>
        <Route exact path="/twitter">
          <TwitterPage />
        </Route>
        <Route exact path="/vote">
          <VotePage />
        </Route>
        <Route exact path="/voter-perks">
          <VoterPerksPage />
        </Route>

        {/* <Route exact path="/partners">
          <PartnersPage />
        </Route> */}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}