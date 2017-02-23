import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import { Main } from '../components/Main';
import InvoiceList from '../components/InvoiceList';
import ProductList from '../components/ProductList';
import List from '../components/CustomerList';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={InvoiceList}/>
      <Route path="products" component={ProductList}/>
      <Route path="customers" component={List}/>
    </Route>
  </Router>
);
