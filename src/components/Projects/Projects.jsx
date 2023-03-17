import React, { useLayoutEffect } from "react";
import {useHistory} from 'react-router-dom';

import rundownHome from './theRundown_home.png';
import rundownDetails from './theRundown_details.png';
import rundownEdit from './theRundown_edit.png';

// Material UI Imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

// Material UI Theming
const theme = createTheme({
  typography: {
    fontFamily: [
      'Albert Sans',
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
    info: {
      main: '#9c454d',
      contrastText: "#fff",
    },
  },
});

function Projects() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>

      <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="body1" mt={0} mb={0} sx={{ fontSize: 22 }} gutterBottom>
          Projects
        </Typography>
      </div>

      <div className="projectsOuterContainer">

        <div className="projectsBorderContainer">
            <div className="projectHeaderBox">
              <Typography className="projectsHeaderText" variant="body1" mt={0} mb={0} sx={{ fontSize: 20 }} gutterBottom>
                The Rundown
              </Typography>
              <Typography className="projectsHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
                Artist's Paint Inventory and Wishlist App
              </Typography>
            </div>
            <div className="projectBody">
              <div className="projectImages">
                <img className="rundownImage" src={rundownHome}></img>
                <img className="rundownImage" src={rundownDetails}></img>
                <img className="rundownImage" src={rundownEdit}></img>
              </div>
              <div className="projectButtons">
                <Button
                variant="contained"
                color="info"
                size="small"
                startIcon={<GitHubIcon />}
                href="https://github.com/librarykrystal/artist-inventory"
                >See it on GitHub
              </Button>
            </div>

          </div>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default Projects;