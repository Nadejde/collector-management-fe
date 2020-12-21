import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ResponsiveDrawer from "./components/ResponsiveDrawer";
import CardScanner from "./components/CardScanner";
import CardList from "./components/CardList";
import EbayListing from "./components/EbayListing"

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ebaylisting/:id">
            <EbayListing />
          </Route>
          <Route path="/cardlist">
            <CardListWrapper />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <CardScannerWrapper />
          </Route>
        </Switch>
    </Router>
  );
}

function CardScannerWrapper() {
  return <ResponsiveDrawer><CardScanner></CardScanner></ResponsiveDrawer>;
}

function CardListWrapper() {
  return <ResponsiveDrawer><CardList></CardList></ResponsiveDrawer>;
}

function Users() {
  return <h2>Users</h2>;
}