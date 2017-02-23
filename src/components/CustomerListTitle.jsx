import React from 'react';
import { Button } from 'react-bootstrap';

const CustomerListTitle = ({callback}) => (
  <h1>Customer list <Button
    onClick={() => {
      callback('create')
    }}>Create</Button>
  </h1>
);

export default CustomerListTitle;
