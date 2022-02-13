import React from "react";
import Mainpage from "../components/mainpage";
import Topbar from "../components/topbar";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import inputReducer from "./reducers/inputReducer";

const rootReducer = combineReducers({
  usrname: inputReducer
})

const store = createStore(rootReducer);

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Topbar></Topbar>
        <Mainpage />
      </Provider>
    </div>
  );
}
