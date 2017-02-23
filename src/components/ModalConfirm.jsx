import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirm = ({show, item, onClose, onRemove}) => {
  const renderBody = () => {
    if (item) {
      return (<p>Are you sure you want remove {item.name}?</p>)
    }
  };
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm removing</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderBody()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onRemove} bsStyle="danger">Remove</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalConfirm;
