import React from "react";
import MuiTypography from "@material-ui/core/Typography";


const Typography = ({label, variant, ...attributes}) => {
    return <MuiTypography variant={variant} {...attributes}>{label}</MuiTypography>
}

export default Typography;