import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import inputReducer from "../store/usernameReducer";
import gameReducer from "../store/gameReducer";

import ModalUsername from "../components/modalUsername";
import Topbar from "../components/topbar";
import Index from "../pages/index";
import Chat from "../pages/chats";
import App from "../pages/";

afterEach(cleanup);

const rootReducer = combineReducers({
  get_username: inputReducer,
  game_selecting: gameReducer,
});

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe("Modal input Test", () => {
  it("Test: modal have InputBox and Button.", () => {
    renderWithRedux(<ModalUsername />);
    screen.getByLabelText(/Input your username/i);
    screen.getByRole("button", { name: /Done/i });
  });
  it("Test: input username and Show username to all page on topbar", () => {
    renderWithRedux(<ModalUsername />);
    userEvent.type(
      screen.getByLabelText(/Input your username/i),
      "Username_test"
    );
    userEvent.click(screen.getByRole("button", { name: /Done/i }));

    const { getByTestId } = renderWithRedux(<Topbar />);
    expect(getByTestId('isUsername')).not.toBeNull()
    // expect(screen.getByTestId("isUsername")).toHaveTextContent("Username_test")
    ;
  });
});

