import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import * as actions from '../actions';

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    if (this.state.id) {
      this.props.updateItem('customers', this.state);
    } else {
      this.props.createItem('customers', this.state);
    }
  }

  render() {
    const { onClose } = this.props;
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.id ? 'Edit Customer' : 'Create Customer'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId="customerName"
            >
              <ControlLabel>Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="John Snow"
              />
            </FormGroup>
            <FormGroup
              controlId="customerAddress"
            >
              <ControlLabel>Address</ControlLabel>
              <FormControl
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChange}
                placeholder="Enter text"
              />
            </FormGroup>
            <FormGroup
              controlId="customerPhone"
            >
              <ControlLabel>Phone</ControlLabel>
              <FormControl
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
                placeholder="Enter text"
              />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={this.handleSubmit}
            bsStyle="primary">
            {this.state.id ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </div>
    )
  }
}

export default connect(state => state, actions)(CustomerForm);
