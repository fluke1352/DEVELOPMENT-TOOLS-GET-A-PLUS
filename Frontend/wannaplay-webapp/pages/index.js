import React from "react";
import Mainpage from "../components/mainpage";
import Topbar from "../components/topbar";
import Chats from "./chats";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import inputReducer from "../reducers/inputReducer";

const rootReducer = combineReducers({
  usrname: inputReducer
})

const store = createStore(rootReducer);


export default function Home() {
  const router = useRouter();
  return (
    <div>
        <Mainpage />
    </div>
  );
}
