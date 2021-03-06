import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ProductListTitle from './ProductListTitle';
import ProductListTable from './ProductListTable';
import ModalConfirm from './ModalConfirm';
import ProductModalEdit from './ProductModalEdit';
import { getItemRemove } from '../reducers';
import { getItemEdit } from '../reducers/index';

export class List extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchList } = this.props;
    fetchList('products');
  }

  render() {
    const { openModal, lists, route, modals, closeModal, removeItem, itemRemove, itemEdit } = this.props;
    return (
      <div>
        <ProductListTitle
          callback={openModal}/>
        <ProductListTable
          callback={openModal}
          items={lists.products.items}
          title={route.path}
        />
        <ModalConfirm
          show={modals.remove.show}
          item={itemRemove}
          onClose={() => {
            closeModal('remove')
          }}
          onRemove={() => {
            removeItem('products', modals.remove.id)
          }}
        />
        <ProductModalEdit
          show={modals.edit.show}
          item={itemEdit}
          onClose={() => {
            closeModal('edit')
          }}
        />
        <ProductModalEdit
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
