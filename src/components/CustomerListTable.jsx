import React from 'react';
import { Table, Button } from 'react-bootstrap';

const CustomerListTable = ({ callback, items, title }) => (
  <Table>
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    {items.map(item => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.phone}</td>
        <td>
          <Button
            onClick={() => {
              callback('edit', title, item.id)
            }}
            bsStyle="link">
            Edit
          </Button>&nbsp;
          <Button
            onClick={() => {
              callback('remove', title, item.id);
            }}
            bsStyle="link">
            Remove
          </Button>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>
);

export default CustomerListTable;
