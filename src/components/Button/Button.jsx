import React from "react";
import MuiButton from "@material-ui/core/Button";

const Button = ({ label, variant="outlined", ...attributes }) => {
    return <MuiButton variant={variant} color="primary" {...attributes}>{label}</MuiButton>;
};

export default Button;