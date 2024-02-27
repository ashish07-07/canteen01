import axios from "axios";

export const getAllFoodas = () => async (dispatch) => {
  // when ever this function is called below request will be send to the reducer
  dispatch({ type: "GET_FOODAS_REQUEST" });

  try {
    const response = await axios.get("/api/foodas/getAllfoodas");
    console.log(response);
    dispatch({ type: "GET_FOODAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FOODAs_FAILED", payload: error });
  }
};
