import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Button from "../Button";

const mockOnClick = jest.fn();

const MockButton = () => {
  return <Button label={"Test Button"} onClick={mockOnClick} />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Button Component renders correctly", () => {
  test("Check if Button component is present in the document", () => {
    render(<MockButton />);
    expect(
      screen.getByRole("button", { name: /test button/i })
    ).toBeInTheDocument();
  });
});

describe("Test Button component event handler", () => {
  test("Check if Button onClick is called when clicked", () => {
    render(<MockButton />);
    fireEvent.click(screen.getByRole("button", { name: /test button/i }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
