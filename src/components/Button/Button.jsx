import React from "react";
import MuiButton from "@material-ui/core/Button";

/**
 * Button Component
 *
 * @since  14/11/2020
 * @access (public)
 *
 * @type     Functional Component
 * @param {String}  label  Label of the button
 * @param {String}  variant  variations of the button (text, outlined, filled)
 *
 */

const Button = ({ label, variant = "outlined", ...attributes }) => {
  return (
    <MuiButton variant={variant} color="primary" {...attributes}>
      {label}
    </MuiButton>
  );
};

export default Button;
