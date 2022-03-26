import React from "react";

import { useSelector } from "react-redux";
import { store } from "../store/store";
import { Provider } from "react-redux";

function App() {
  const getUsrname = useSelector((state) => state.get_username.username);
  return (
    <div>
      <Provider store={store}>
        <label htmlFor="input_username">Input your username</label>
        <input id="input_username"></input>
        <button>Done</button>
        <text>{getUsrname}</text>
      </Provider>
    </div>
  );
}

export default App;
