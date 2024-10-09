import React from "react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

// Test the App component
describe("<App />", () => {
  test("Should add and remove an item to the list", async () => {
    // Set up the user event
    const user = userEvent.setup();

    // Render the App component
    render(<App />);

    // Get the input element
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    // Get the form element
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    // Get the button element
    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // Type some text in the input element
    const text = crypto.randomUUID();
    // user.type() is a function that simulates typing in the input element
    await user.type(input, text);
    // user.click() is a function that simulates clicking on the button element
    await user.click(button!);

    // Asegurar que el elemento se ha añadido
    const list = screen.getByRole("list");
    expect(list).toBeDefined();

    expect(list.childNodes.length).toBe(1);

    // Asegurar que el elemento se ha eliminado
    const item = screen.getByText(text);
    const removeButton = item.querySelector("button");
    expect(removeButton).toBeDefined();

    await user.click(removeButton!);

    const noResults = screen.queryByText("No hay elementos a mostrar");
    expect(noResults).toBeDefined();
  });
});
