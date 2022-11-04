import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index";

describe("Button", () => {
  test("render", async () => {
    const log = console.log;
    const mockedLog = jest.fn();
    console.log = mockedLog;

    const user = userEvent.setup();
    const { getByTestId } = render(<Button />);
    const button = getByTestId("my_button");

    await user.click(button);
    expect(button).toBeInTheDocument();
    expect(mockedLog).toHaveBeenCalledWith("clicked");
    console.log = log;
  });
});
