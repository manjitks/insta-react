import { MODAL_CLOSE, MODAL_OPEN } from "../../type";

const initialState = {
  isClose: true,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isClose: false,
      };

    case MODAL_CLOSE:
      return {
        ...state,
        isClose: true,
      };

    default:
      return state;
  }
};

export default modalReducer;
