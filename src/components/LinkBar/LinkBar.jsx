import React, { useLayoutEffect } from "react";

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PortraitIcon from '@mui/icons-material/Portrait';
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
      main: '#fff',
      contrastText: "#fff",
    },
  },
});

function LinkBar() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="linkBarOuter">
        <div className="linkBar">

          {/* LINKEDIN */}
          <IconButton aria-label="linkedIn"
            className="navLinkIconBtn"
            color="secondary"
            href="https://www.linkedin.com/in/krystal-frost"
          >
            <LinkedInIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* GITHUB */}
          <IconButton aria-label="gitHub"
            className="navLinkIconBtn"
            color="secondary"
            href="https://github.com/librarykrystal"
          >
            <GitHubIcon sx={{ fontSize: 26 }} />
          </IconButton>

          {/* GALLERY OF FROST */}
          <IconButton aria-label="galleryOfFrost"
            className="navLinkIconBtn"
            color="secondary"
            href="https://www.krystalfrost.com/"
          >
            <PortraitIcon sx={{ fontSize: 26 }} />
          </IconButton>

        </div>
      </div>
    </ThemeProvider>
  );
}

export default LinkBar;