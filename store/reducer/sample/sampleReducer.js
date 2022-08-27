import { GET_SAMPLE, SAMPLE_ERROR } from "./type";

const initialState = {
  sample: [],
  loading: true,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAMPLE:
      return {
        ...state,
        sample: action.data,
        loading: false,
      };

    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sampleReducer;
