import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Card from "../Card";

const MockCard = () => {
  return <Card label={"Test Card"} />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Card component renders correctly", () => {
  test("Card component is present in the document", () => {
    render(<MockCard />);
    expect(screen.getByTestId("card-label")).toBeInTheDocument();
  });
});
