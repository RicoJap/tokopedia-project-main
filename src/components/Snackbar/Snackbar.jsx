import React from "react";
import MuiSnackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} {...props} />;
}

/**
 * Snackbar Component
 *
 * @since  09/08/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {Boolean}  open  Open/close the Snackbar Component
 * @param {String}  severity  Predefined colour/styles from Material-UI for the Snackbar Component
 * @param {String}  message  Message inside the Snackbar Component
 * @param {NUMBER}  autoHideDuration  the duration until the Snackbar Component disappears
 * @param {Function}  handleClose  onChange handler
 * @param {String}  variant  Predefined styles from Material-UI for the Snackbar Component
 *
 */
const Snackbar = ({
    snackbarStatus,
    autoHideDuration,
    handleClose,
    variant,
    ...attributes
}) => {

    const handleSnackbarClose = (_, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        handleClose({...snackbarStatus, open: false})
    }
    return (
        <MuiSnackbar
            open={snackbarStatus.open}
            autoHideDuration={autoHideDuration}
            onClose={handleSnackbarClose}
            {...attributes}
        >
            <Alert onClose={handleSnackbarClose} severity={snackbarStatus.severity} variant={variant}>
                {snackbarStatus.message}
            </Alert>
        </MuiSnackbar>
    );
};

export default Snackbar;
