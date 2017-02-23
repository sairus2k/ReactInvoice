import React from 'react';
import { Modal } from 'react-bootstrap';
import CustomerForm from './CustomerForm';

const CustomerModalEdit = ({ show, item, onClose }) => {
  const renderBody = () => {
    if (item) {
      return (
        <CustomerForm item={item} onClose={onClose}/>
      )
    }
  };
  return (
    <Modal show={show} onHide={onClose}>
      {renderBody()}
    </Modal>
  )
};

export default CustomerModalEdit;
