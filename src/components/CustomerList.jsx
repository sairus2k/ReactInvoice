import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import CustomerListTitle from './CustomerListTitle';
import CustomerListTable from './CustomerListTable';
import ModalConfirm from './ModalConfirm';
import CustomerModalEdit from './CustomerModalEdit';
import { getItemRemove } from '../reducers';
import { getItemEdit } from '../reducers/index';

export class List extends React.Component {
  componentDidMount() {
    this.fetchDate();
  }

  fetchDate() {
    const { fetchList } = this.props;
    fetchList('customers');
  }

  render() {
    const { openModal, lists, route, modals, closeModal, removeItem, itemRemove, itemEdit } = this.props;
    return (
      <div>
        <CustomerListTitle
          callback={openModal}/>
        <CustomerListTable
          callback={openModal}
          items={lists.customers.items}
          title={route.path}
        />
        <ModalConfirm
          show={modals.remove.show}
          item={itemRemove}
          onClose={() => {
            closeModal('remove')
          }}
          onRemove={() => {
            removeItem('customers', modals.remove.id)
          }}
        />
        <CustomerModalEdit
          show={modals.edit.show}
          item={itemEdit}
          onClose={() => {
            closeModal('edit')
          }}
        />
        <CustomerModalEdit
          show={modals.create.show}
          item={itemEdit}
          onClose={() => {
            closeModal('create')
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    itemEdit: getItemEdit(state),
    itemRemove: getItemRemove(state)
  }
};

export default connect(mapStateToProps, actions)(List);
