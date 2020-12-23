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
import EbayListing from "./components/EbayListing";
import OrderChecker from "./components/OrderChecker";

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
          <Route path="/ordercheck">
            <OrderCheckerWrapper />
          </Route>
          <Route path="/">
            <CardScannerWrapper />
          </Route>
        </Switch>
    </Router>
  );
}

function OrderCheckerWrapper() {
  return <ResponsiveDrawer><OrderChecker></OrderChecker></ResponsiveDrawer>;
}

function CardScannerWrapper() {
  return <ResponsiveDrawer><CardScanner></CardScanner></ResponsiveDrawer>;
}

function CardListWrapper() {
  return <ResponsiveDrawer><CardList></CardList></ResponsiveDrawer>;
}