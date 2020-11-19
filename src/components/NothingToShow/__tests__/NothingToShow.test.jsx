import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import NothingToShow from "../NothingToShow";

const MockNothingToShow = () => {
  return <NothingToShow label={'Test Label'} />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockNothingToShow />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("NothingToShow Component renders correctly", () => {
  test("Check if NothingToShow component is present in the document", () => {
    render(<MockNothingToShow />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
});
