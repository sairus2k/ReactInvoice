
export const openModal = (request, list, id) => ({
  type: 'OPEN_MODAL',
  request,
  list,
  id
});

export const closeModal = (request) => ({
  type: 'CLOSE_MODAL',
  request
});
