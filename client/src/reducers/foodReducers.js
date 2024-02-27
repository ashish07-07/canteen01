export const getAllFoodasReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_FOODAS_REQUEST":
      return {
        ...state,
      };
    case "GET_FOODAS_SUCCESS":
      return {
        foodas: action.payload,
      };
    case "GET_FOODAS_FAILED":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
