import { GET_SAMPLE, SAMPLE_ERROR } from "./type";

export const getSampleData = () => async (dispatch) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      return dispatch({
        type: GET_SAMPLE,
        data: res,
      });
    })
    .catch(() => {
      console.log("error");
    });
};
