import "@testing-library/jest-dom";
import React, { useState } from "react";
import renderer from "react-test-renderer";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import FormDialog from "../FormDialog";

const mockOnChange = jest.fn();
const mockOnSubmit = jest.fn();

const MockFormDialog = () => {
  return (
    <FormDialog
      open={true}
      dialogTitle={"Test Dialog Title"}
      dialogSubTitle={"Test Dialog Subtitle"}
      textFieldLabel={"Test Textfield Label"}
      textFieldOnChange={mockOnChange}
      dialogConfirmButtonLabel={"Test Dialog Confirm Label"}
      onSubmit={mockOnSubmit}
    />
  );
};

// describe("Snapshot testing", () => {
//   const tree = renderer.create(<MockFormDialog />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe("FormDialog Component renders correctly", () => {
  test("Check if FormDialog component is present in the document", () => {
    render(<MockFormDialog />);
    expect(screen.getByTestId("dialog-title")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-subtitle")).toBeInTheDocument();
    expect(screen.getByTestId("dialog-text-field")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});

describe("Test FormDialog component event handler", () => {
  test("FormDialog textfield component onChange() triggered when user types in the textfield", () => {
    render(<MockFormDialog />);
    fireEvent.change(screen.getByTestId("dialog-text-field"), {
      target: { value: "mockValue" },
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(screen.getByDisplayValue('mockValue')).toBeInTheDocument();
  });

  test("FormDialog button component onClick() triggered when user types in the textfield", () => {
    render(<MockFormDialog />);
    fireEvent.click(screen.getByTestId("button"));
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

});
