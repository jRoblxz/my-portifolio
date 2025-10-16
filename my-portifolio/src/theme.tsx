
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#60519b',
        },
        secondary: {
            main: '#60519b',
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;