// import { combineReducers } from "redux";
// import { createStore, applyMiddleware } from "redux";

// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { getAllFoodasReducer } from "./reducers/foodReducers";
// const finalReducer = combineReducers({
//   getAllFoodasReducer: getAllFoodasReducer,
// });
// const initialState = {};
// const composeEnhancers = composeWithDevTools({});

// const store = createStore(
//   finalReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;

// import { combineReducers, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { getAllFoodasReducer } from "./reducers/foodReducers";

// const finalReducer = combineReducers({
//   getAllFoodasReducer: getAllFoodasReducer,
// });

// const initialState = {};

// const store = createStore(
//   finalReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllFoodasReducer } from "./reducers/foodReducers";
const finalReducer = combineReducers({
  getAllFoodasReducer: getAllFoodasReducer,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
