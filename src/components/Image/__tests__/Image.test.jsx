import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Image from "../Image";
import PokeballIcon from "../../../assets/pokeball-big.png";

const MockImage = () => {
  return <Image url={PokeballIcon} />;
};

describe("Snapshot testing", () => {
  const tree = renderer.create(<MockImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Image Component renders correctly', () => {
  test('Check if Image component is present in the document', () => {
		render(<MockImage />);
		expect(screen.getByTestId('image')).toBeInTheDocument();
  });
});