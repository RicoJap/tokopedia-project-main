import { createMuiTheme } from "@material-ui/core/styles";

export const PRIMARY_COLOR = '#7D4CDB';
export const SECONDARY_COLOR = '#11CB5F';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            // This is green.A700 as hex.
            main: SECONDARY_COLOR,
        },
    },
});
