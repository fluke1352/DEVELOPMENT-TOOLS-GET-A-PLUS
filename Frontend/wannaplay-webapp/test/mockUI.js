import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { store } from "../store/store";
import { Provider } from "react-redux";
import UsernameAction from "../store/usernameAction";

function App() {
  const dispatch = useDispatch();
  const getUsrname = useSelector((state) => state.get_username.username);
  return (
    <div>
      <Provider store={store}>
        <label htmlFor="input_username">Input your username</label>
        <input id="input_username"></input>
        <button onClick={() => {
          let username = document.getElementById("input_username").value;
          dispatch(UsernameAction(username));
        }}>Done</button>

        
        <h2 data-testid="isUsername">{getUsrname}</h2>
      </Provider>
    </div>
  );
}

export default App;
