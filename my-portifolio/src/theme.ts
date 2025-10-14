import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let  theme = createTheme({
  palette: {
    primary: {
      main: '#60519b',
    },
    secondary: {
      main: '#bfc0d1',
    },
  },
  typography: {
    fontFamily: "Segoe UI"
  }
});

theme = responsiveFontSizes(theme);
export default theme;