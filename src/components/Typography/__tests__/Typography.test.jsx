import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Typography from "../Typography";

const MockTypography = () => {
  return <Typography variant="p" label="Test Label" />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockTypography />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Typography Component renders correctly", () => {
  test("Check if Typography component is present in the document", () => {
    render(<MockTypography />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });
});
