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
      this.props.updateItem('products', this.state);
    } else {
      this.props.createItem('products', this.state);
    }
  }

  render() {
    const { onClose } = this.props;
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.id ? 'Edit Product' : 'Create Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId="productName"
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
              controlId="productPrice"
            >
              <ControlLabel>Price</ControlLabel>
              <FormControl
                type="text"
                name="price"
                value={this.state.price}
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
