import React from "react";
import Mainpage from "../components/mainpage";

import { createStore, combineReducers} from "redux";
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
        <Mainpage />
      </Provider>
    </div>
  ); 
}
