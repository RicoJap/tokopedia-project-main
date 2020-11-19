import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

import Button from "../Button/Button";

/**
 * FormDialog Component
 *
 * @since  16/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {Boolean}  open  Status of the dialog box to be opened or closed
 * @param {String}  dialogTitle  The dialog box title
 * @param {String}  dialogSubTitle  The dialog box subtitle
 * @param {String}  textFieldLabel  The text field label inside the dialog box
 * @param {String}  textFieldValue  The text field value inside the dialog box
 * @param {Function}  textFieldOnChange  On change event handler for text field component
 * @param {String}  dialogConfirmButtonLabel  The label of the confirm button inside the dialog box
 * @param {Function}  onSubmit  On submit function if the user clicks the button inside the dialog box
 *
 */

const FormDialog = ({
  open,
  dialogTitle,
  dialogSubTitle,
  textFieldLabel,
  textFieldValue,
  textFieldOnChange,
  dialogConfirmButtonLabel,
  onSubmit,
}) => {
  return (
    <MuiDialog open={open}>
      <MuiDialogTitle data-testid="dialog-title">{dialogTitle}</MuiDialogTitle>
      <MuiDialogContent>
        <MuiDialogContentText data-testid="dialog-subtitle">{dialogSubTitle}</MuiDialogContentText>
        <MuiTextField
          autoFocus
          margin="dense"
          label={textFieldLabel}
          type="text"
          fullWidth
          // value={textFieldValue}
          onChange={textFieldOnChange}
          inputProps={{'data-testid': "dialog-text-field"}}
        />
      </MuiDialogContent>
      <MuiDialogActions>
        <Button
          variant="text"
          onClick={onSubmit}
          color="primary"
          label={dialogConfirmButtonLabel}
        />
      </MuiDialogActions>
    </MuiDialog>
  );
};

export default FormDialog;
