// const sum = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

import React from "react";
import { render, screen } from "@testing-library/react";
// import { render, fireEvent, screen } from "../test-utils";
import ModalUsername from "../components/modalUsername";
import MyApp from "../pages/_app.js";
import Index from "../pages/index.js";
import Topbar from "../components/topbar";
import App from "./sum";
// import { store } from "../store/store";
import { Provider } from "react-redux";

// test("Check Modal", () =>{
//     const {getByText} = render(<ModalUsername/>)
// })
import inputReducer from "../store/usernameReducer";
import { createStore, combineReducers } from "redux";

const initialState = {
  username: "bankUsername",
};

const rootReducer = combineReducers({
  get_username: inputReducer,
});

const store = createStore(rootReducer, initialState);

const Wrapper = ({ App }) => <Provider store={store}>{App}</Provider>;

describe("ModalUsername", () => {
  it("Test: Modal box", () => {
    render(<App />);
    //test in put username
    screen.getByLabelText(/Input your username/i);
    screen.getByRole("button", { name: /Done/i });
  });
  it("Test: get username", async () => {
    render(<App />, { wrapper: Wrapper });
    //test input username
    const userName = await screen.findByText("bankUsername");
    expect(userName).toBeTruthy();
    // screen.getByText("bankUsername");
  });
});
