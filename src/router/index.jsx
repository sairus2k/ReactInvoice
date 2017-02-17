import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import { Main } from '../components/Main';
import { InvoiceList } from '../components/InvoiceList';
import { ProductList } from '../components/ProductList';
import { CustomersList } from '../components/CustomersList';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={InvoiceList}/>
      <Route path="products" component={ProductList}/>
      <Route path="customers" component={CustomersList}/>
    </Route>
  </Router>
);
