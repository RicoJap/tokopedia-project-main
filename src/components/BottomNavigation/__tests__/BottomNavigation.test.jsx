import "@testing-library/jest-dom";
import React from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import BottomNavigation from "../BottomNavigation";

const mockOnChange = jest.fn();
const mockSelectedAction = jest.mock();

const MockBottomNavigation = () => {
  return (
    <BottomNavigation
      selectedAction={mockSelectedAction}
      onChange={mockOnChange}
      actions={[
        { label: "Action 1" },
        { label: "Action 2"},
      ]}
    />
  );
};

describe('Snapshot testing', () => {
  const tree = renderer.create(<MockBottomNavigation />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('BottomNavigation Component renders correctly', () => {
  test('Check if BottomNavigation component is present in the document', () => {
		render(<MockBottomNavigation />);
		expect(screen.getByTestId('Action 1')).toBeInTheDocument();
		expect(screen.getByTestId('Action 2')).toBeInTheDocument();
  });
});

describe('Test BottomNavigation component event handler', () => {
  test('BottomNavigation component onChange() triggered when one of the action button is pressed', async () => {
    render(<MockBottomNavigation />);
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('Action 1'));
    });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
