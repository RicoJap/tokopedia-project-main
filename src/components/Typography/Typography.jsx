import React from "react";
import MuiTypography from "@material-ui/core/Typography";

/**
 * Typography Component
 *
 * @since  14/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {String}  label  Status of the snackbar including (Open/Close, severity and message)
 * @param {String}  variant  Valid variations of HTML text tags e.g. h1, h2, h3, p
 *
 */

const Typography = ({ label, variant, ...attributes }) => {
  return (
    <MuiTypography variant={variant} {...attributes}>
      {label}
    </MuiTypography>
  );
};

export default Typography;
