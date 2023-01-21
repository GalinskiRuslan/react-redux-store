import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/reducer";

const rootReduser = combineReducers({
  itemReducers: reducer,
});

export const store = configureStore({ reducer : rootReduser });
