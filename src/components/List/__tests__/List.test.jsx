import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import List from "../List";

const mockListItems = [
  {
    name: "Mock List Item 1",
  },
  {
    name: "Mock List Item 2",
  },
  {
    name: "Mock List Item 3",
  },
];

const MockList = () => {
  return <List listItems={mockListItems} labelSelector="name" />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockList />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("List Component renders correctly", () => {
  test("Check if List component is present in the document", () => {
    render(<MockList />);
    expect(screen.getByTestId("Mock List Item 1")).toBeInTheDocument();
    expect(screen.getByTestId("Mock List Item 2")).toBeInTheDocument();
    expect(screen.getByTestId("Mock List Item 3")).toBeInTheDocument();
  });
});
