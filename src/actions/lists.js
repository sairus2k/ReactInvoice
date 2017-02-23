import axios from 'axios';
import { getIsFetching } from '../reducers';
import { closeModal } from './modal';

export const fetchList = (title) => (dispatch, getState) => {
  if (getIsFetching(getState(), title)) {
    return Promise.resolve();
  }
  dispatch({
    type: 'FETCH_LIST_REQUEST'
  });
  return axios.get(`/api/${title}`).then(
    response =>
      dispatch({
        type: 'FETCH_LIST_RESPONSE',
        items: response.data,
        title
      }),
    error =>
      dispatch({
        type: 'FETCH_LIST_FAILURE',
        message: error.message || 'Something went wrong.'
      })
  )
};

export const createItem = (title, item) => (dispatch) => {
  dispatch(closeModal('create'));
  return axios.post(`/api/${title}`, item).then(
    response => {
      dispatch({
        type: 'CREATE_ITEM_SUCCESS',
        item: response.data,
        title
      })
    },
    error => {
      dispatch({
        type: 'CREATE_ITEM_FAILURE',
        message: error.message || 'Something went wrong.'
      })
    }
  )
};

export const updateItem = (title, item) => (dispatch) => {
  dispatch(closeModal('edit'));
  return axios.put(`/api/${title}/${item.id}`, item).then(
    response => {
      dispatch({
        type: 'UPDATE_ITEM_SUCCESS',
        item: response.data,
        title
      })
    },
    error => {
      dispatch({
        type: 'UPDATE_ITEM_FAILURE',
        message: error.message || 'Something went wrong.'
      })
    }
  )
};

export const removeItem = (title, id) => (dispatch) => {
  dispatch(closeModal('remove'));
  return axios.delete(`/api/${title}/${id}`).then(
    response => {
      dispatch({
        type: 'REMOVE_ITEM_SUCCESS',
        item: response.data,
        title
      })
    },
    error => {
      dispatch({
        type: 'REMOVE_ITEM_FAILURE',
        message: error.message || 'Something went wrong.'
      })
    }
  )
};

