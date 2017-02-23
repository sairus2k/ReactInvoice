import { combineReducers } from 'redux';

import createLists, * as fromLists from './lists';
import createModals from './modals';

const lists = combineReducers({
  customers: createLists('customers'),
  products: createLists('products')
});

const modals = combineReducers({
  create: createModals('create'),
  edit: createModals('edit'),
  remove: createModals('remove')
});

const reducer = combineReducers({
  lists,
  modals
});

export default reducer;

export const getIsFetching = (state, title) =>
  fromLists.getIsFetching(state.lists[title]);
export const getItemRemove = (state) =>
  fromLists.getSingleListItem(state.lists, state.modals.remove.list, state.modals.remove.id);
export const getItemEdit = (state) =>
  fromLists.getSingleListItem(state.lists, state.modals.edit.list, state.modals.edit.id);
