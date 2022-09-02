import { MODAL_CLOSE, MODAL_OPEN } from "../../type";

export const openModal = () => async (dispatch) => {
  return dispatch({
    type: MODAL_OPEN,
  });
};

export const closeModal = () => async (dispatch) => {
  return dispatch({
    type: MODAL_CLOSE,
  });
};
