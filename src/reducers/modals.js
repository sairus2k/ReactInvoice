const createModals = (title) => (state = {
  show: false,
  list: null,
  id: null
}, action) => {
  if (action.request !== title) {
    return state
  }
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        show: true,
        list: action.list,
        id: action.id
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        show: false,
        list: null,
        id: null
      };
    default:
      return state;
  }
};

export default createModals;
