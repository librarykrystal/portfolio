import React, { useLayoutEffect } from "react";

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';

// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: [
      'Albert Sans',
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
          <Typography variant="h3" mt={1.4} mb={0} sx={{ fontSize: 52 }} gutterBottom>
            Krystal Frost
          </Typography>
        </div>

        <div className="headerFSSD">
          {/* <Typography variant="body1" mt={0.1} mb={0} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid #194656", borderRight: "5px solid #23626b"}} gutterBottom>Full-Stack</Typography> */}
          <Typography variant="body1" mt={0.1} mb={0} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid #6f2c3f", borderRight: "5px solid #8f454c"}} gutterBottom>Full-Stack</Typography>
          <Typography variant="body1" mt={0} mb={-0.4} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid black", borderRight: "5px solid black"}} gutterBottom>Software</Typography>
          <Typography variant="body1" mt={0} mb={0} ml={-0.5} sx={{width: "100px", borderLeft: "5px solid black", borderRight: "5px solid black"}} gutterBottom>Developer</Typography>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default Header;