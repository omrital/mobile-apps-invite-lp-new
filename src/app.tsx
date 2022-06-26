import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import ProductsPage from './ProductPage/ProductsPage';
import AddProduct from './AddProductPage/AddProducts';
import { Context, useContextValue } from './Context/context';
import DesktopLP from './DesktopLP';
import * as React from "react";

export interface AppProps {
    className?: string;
}

//export const App: React.VFC<AppProps>= () => (
//  <Context.Provider value={useContextValue()}>
//      <main>
//          <Router>
//              <Switch>
//                  <Route path="/products-page">
//                      <ProductsPage />
//                  </Route>
//                  <Route path="/add-product">
//                      <AddProduct />
//                  </Route>
//                  <Route exact path="/">
//                      <Redirect to="/products-page" />
//                  </Route>
//              </Switch>
//          </Router>
//      </main>
//  </Context.Provider>
//);

export const App: React.VFC<AppProps>= () => (
  <DesktopLP />
);
