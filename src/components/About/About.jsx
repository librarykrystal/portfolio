import React, { useLayoutEffect } from "react";
import {useHistory} from 'react-router-dom';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      main: '#000',
    },
    secondary: {
      main: '#fff',
      contrastText: "#fff",
    },
  },
});

function About() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <div className="photo">
          
        </div>
        <div className="intro">
          <Typography variant="body1" mt={0} mb={0} sx={{ textIndent: "40px", textAlign: "justify"}}gutterBottom>
            I’m a creative type and a puzzle-solver, full-stack trained with an affinity for front-end design.  When I’m not working in code, I can be found painting, writing, taking creative classes, or wandering my favorite museums.
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default About;