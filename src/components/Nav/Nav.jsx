import React, { useLayoutEffect } from "react";
import {useHistory} from 'react-router-dom';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';

import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';


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
      main: "#fff",
      contrastText: "#fff",
    },
  },
});

function Nav() {

  const history = useHistory();

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const goHome = (event) => {
    event.preventDefault();
    history.push("/home");
  }

  const goAbout = (event) => {
    event.preventDefault();
    history.push("/about");
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="navBarOuter">
        <div className="navBar">

          {/* HOME */}
          <IconButton aria-label="home"
            className="navIconBtn"
            color="secondary"
            onClick={goHome}
          >
            <HomeIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* ABOUT */}
          <IconButton aria-label="about"
            className="navIconBtn"
            color="secondary"
            onClick={goAbout}
          >
            <InfoIcon sx={{ fontSize: 26 }} />
          </IconButton>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default Nav;