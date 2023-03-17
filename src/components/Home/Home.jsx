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

function Home() {

  // Makes each view load scrolled to top
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="container">

        <div className="skillsBorderContainer">
          <div className="skillsContainer">
            <div className="skillsHeaderBox">
              <Typography className="skillsHeaderText" variant="h6" mt={0} mb={0} sx={{ fontSize: 20 }} gutterBottom>
                Skills
              </Typography>
            </div>
            <div className="skillsBody">
              <Typography variant="body1" mt={1} mb={0} gutterBottom>HTML • CSS • JavaScript</Typography>
              <Typography variant="body1" mt={0} mb={0} gutterBottom>JQuery • React • Redux</Typography>
              <Typography variant="body1" mt={0} mb={0} gutterBottom>Photoshop • Material UI</Typography>
              <Typography variant="body1" mt={0} mb={0} gutterBottom>Node • npm • Express</Typography>
              <Typography variant="body1" mt={0} mb={1} gutterBottom>Ajax • Axios • PostgreSQL</Typography>
              
            </div>
          </div>
        </div>

        <div className="projectsBorderContainer">
          <div className="projectsContainer">
            <div className="projectsHeaderBox">
              <Typography className="projectsHeaderText" variant="body1" mt={0} mb={0} sx={{ fontSize: 20 }} gutterBottom>
                Projects
              </Typography>
            </div>
            <div className="projectsBody">
              <Typography variant="body1" mt={2} mb={0} gutterBottom>
                Projects will go here.
              </Typography>
            </div>
          </div>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default Home;