import { combineReducers } from 'redux';

const createLists = (title) => {
  const items = (state = [], action) => {
    if (action.title !== title) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_LIST_RESPONSE':
        return [
          ...action.items
        ];
      case 'CREATE_ITEM_SUCCESS':
        return [
          ...state,
          action.item
        ];
      case 'UPDATE_ITEM_SUCCESS':
        return [
          ...state.filter(item => item.id !== action.item.id),
          action.item
        ];
      case 'REMOVE_ITEM_SUCCESS':
        return [
          ...state.filter(item => item.id !== action.item.id)
        ];
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.title !== title) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_LIST_RESPONSE':
        return false;
      case 'FETCH_LIST_REQUEST':
        return true;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.title !== title) {
      return state;
    }
    switch (action.type) {
      case 'FETCH_LIST_FAILURE':
        return action.message;
      case 'FETCH_LIST_REQUEST':
      case 'FETCH_LIST_RESPONSE':
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    items,
    isFetching,
    errorMessage
  });
};

export default createLists;

export const getIsFetching = (state) => state.isFetching;
export const getSingleListItem = (state, list, id) => {
  if (state[list]) {
    return state[list].items.find(item => item.id === id);
  }
  return {
    name: '',
    address: '',
    phone: ''
  }
};
