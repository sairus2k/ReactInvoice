import React from 'react';
import { Modal } from 'react-bootstrap';
import ProductForm from './ProductForm';

const ProductModalEdit = ({ show, item, onClose }) => {
  const renderBody = () => {
    if (item) {
      return (
        <ProductForm item={item} onClose={onClose}/>
      )
    }
  };
  return (
    <Modal show={show} onHide={onClose}>
      {renderBody()}
    </Modal>
  )
};

export default ProductModalEdit;
