import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Pagination from "../Pagination";

const mockOnChange = jest.fn();

const MockPagination = () => {
  return <Pagination onChange={mockOnChange} page={3} pages={10} />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockPagination />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Pagination Component renders correctly", () => {
  test("Check if Pagination component is present in the document", () => {
    render(<MockPagination />);
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});

describe("Test Pagination component event handler", () => {
  test("Pagination component onChange() triggered when one of the action button is pressed", () => {
    render(<MockPagination />);
    fireEvent.click(screen.getByLabelText("Go to next page"));
    fireEvent.click(screen.getByLabelText("Go to previous page"));
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });
});
