import React from "react";

import { useSelector } from "react-redux";

function App(){
    const getUsrname = useSelector((state) => state.usrname.username);
    return(
        <div>
            <label htmlFor="input_username">Input your username</label>
            <input id="input_username"></input>
            <button>Done</button>
            <text>bankUsername</text>
        </div>
    )
}

export default App;