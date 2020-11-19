import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import React from 'react';
import Snackbar from '../Snackbar';

const mockHandleClose = jest.fn();

const MockSnackbar = () => {
  return (
    <Snackbar
      label={'Test Snackbar'}
      autoHideDuration={null}
      snackbarStatus={{open: true, message: 'Test Snackbar', severity: 'success'}}
      handleClose={mockHandleClose}
    />
  );
};

describe('Snackbar component renders correctly', () => {
  test('Snackbar component is present in the document', () => {
    render(<MockSnackbar />);
    expect(screen.getByTestId('snackbar')).toBeInTheDocument();
  });
});

describe('Test Snackbar component event handler', () => {
  test('Snackbar component handleClose() triggered when snackbar is closed', async () => {
    render(<MockSnackbar />);
    await waitFor(() => {
      fireEvent.click(screen.getByTitle('Close'));
    });
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
