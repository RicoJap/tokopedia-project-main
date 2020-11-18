import React from "react";
import MuiTextField from "@material-ui/core/TextField";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Button from "../Button/Button";

const FormDialog = ({
    open,
    setOpen,
    dialogTitle,
    dialogSubTitle,
    textFieldLabel,
    textFieldValue,
    textFieldOnChange,
    dialogConfirmButtonLabel,
    onSubmit
}) => {
    const handleFormDialogClose = () => {
        setOpen(false);
    };

    return (
        <MuiDialog open={open}>
            <MuiDialogTitle>{dialogTitle}</MuiDialogTitle>
            <MuiDialogContent>
                <MuiDialogContentText>{dialogSubTitle}</MuiDialogContentText>
                <MuiTextField
                    autoFocus
                    margin="dense"
                    label={textFieldLabel}
                    type="text"
                    fullWidth
                    value={textFieldValue}
                    onChange={textFieldOnChange}
                />
            </MuiDialogContent>
            <MuiDialogActions>
                <Button variant="text" onClick={onSubmit} color="primary" label={dialogConfirmButtonLabel}/>
            </MuiDialogActions>
        </MuiDialog>
    );
};

export default FormDialog;