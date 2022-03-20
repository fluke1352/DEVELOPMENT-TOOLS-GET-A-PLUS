// const sum = require("./sum");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

import React from "react";
import { render, screen } from "@testing-library/react";
// import { render, fireEvent, screen } from "../test-utils";
import ModalUsername from "./modalUsername";
import MyApp from "../pages/_app.js";
import Index from "../pages/index.js";
import Topbar from "./topbar";
import App from "./sum";

// test("Check Modal", () =>{
//     const {getByText} = render(<ModalUsername/>)
// })

describe("ModalUsername", () => {
  it("Test: Modal box", () => {
    render(<App />);
    //test in put username
    screen.getByLabelText(/Input your username/i);
    screen.getByRole("button", { name: /Done/i });
  });
  it("Test: get username", () => {
    render(<App />);
    //test in put username
    screen.getByText("bankUsername");
  });
});
