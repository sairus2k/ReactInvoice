import React from 'react';
import { Button } from 'react-bootstrap';

const ProductListTitle = ({callback}) => (
  <h1>Products list <Button
    onClick={() => {
      callback('create')
    }}>Create</Button>
  </h1>
);

export default ProductListTitle;
