import React from "react";
import MuiSnackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} {...props} />;
}

/**
 * Snackbar Component
 *
 * @since  17/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {Object}  snackbarStatus  Status of the snackbar including (Open/Close, severity and message)
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
    if (reason === "clickaway") {
      return;
    }
    handleClose({ ...snackbarStatus, open: false });
	};
	
  return (
    <MuiSnackbar
      open={snackbarStatus.open}
      autoHideDuration={autoHideDuration}
      onClose={handleSnackbarClose}
      {...attributes}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={snackbarStatus.severity}
        variant={variant}
      >
        {snackbarStatus.message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
