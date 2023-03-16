import React, { useLayoutEffect } from "react";

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';


// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: [
      'Andika',
    ],
  },
  palette: {
    primary: {
      main: '#d9d9d9',
    },
    secondary: {
      main: grey[700],
      contrastText: "#fff",
    },
  },
});

function Header() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="headerOuter">

        <div className="headerName">
          <Typography variant="h3" mt={2} mb={0} gutterBottom>
            Krystal Frost
          </Typography>
        </div>

        <div className="headerFSSE">
          <Typography variant="body1" mt={0} mb={0} gutterBottom>Full-Stack</Typography>
          {/* <Typography variant="body1" mt={0} mb={-0.1} gutterBottom>Stack</Typography> */}
          <Typography variant="body1" mt={0} mb={-0.5} gutterBottom>Software</Typography>
          <Typography variant="body1" mt={0} mb={0} gutterBottom>Developer</Typography>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default Header;