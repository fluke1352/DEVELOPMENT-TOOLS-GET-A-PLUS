import React from "react";
import Mainpage from "./mainpage";
import SelectRoompage from "./SelectRoompage";
import Topbar from "../components/topbar";
import Chats from "./chats";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import inputReducer from "../store/usernameReducer";

// const rootReducer = combineReducers({
//   usrname: inputReducer
// })

// const store = createStore(rootReducer);


export default function Home() {
  // const router = useRouter();
  return (
    <div style={{marginTop:100}}>
        <Mainpage />
        {/* <SelectRoompage/> */}
    </div>
  );
}
