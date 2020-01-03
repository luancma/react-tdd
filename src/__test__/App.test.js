import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("Deve retornar um form", () => {
    const { getByText, getByTestId, debug, getByLabelText } = render(<App />);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });

    fireEvent.submit(getByTestId("tech-form"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});
