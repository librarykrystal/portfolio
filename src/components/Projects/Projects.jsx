import React, { useLayoutEffect } from "react";

// Project image imports
import artSite from './artSite.png';
import gallery from './gallerySnaps.png';
import idealWeek from './idealLivingWeek.png';
import movieSet from './myMovieSet.png';
import rundown from './theRundown.png';

// Material UI imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/700.css';
import '@fontsource/andika/400.css';
import '@fontsource/andika/700.css';
import '@fontsource/albert-sans/400.css';
import '@fontsource/rock-salt/400.css';
import '@fontsource/shadows-into-light-two';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import BrushIcon from '@mui/icons-material/Brush';

// Material UI theming
const theme = createTheme({
  typography: {
    fontFamily: 'Albert Sans',
    h4: {
      fontFamily: 'Shadows Into Light Two',
    }
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

  // Array of project data
  const projects = [
    {
      id: 1,
      heading: 'Fine Art Portfolio Site',
      subheading: 'Deployed website showcasing artwork',
      image: artSite,
      desc: 'This personal portfolio site, built with React, features paintings, photography, and updates on my latest and in-progress work.',
      gitLink: 'https://github.com/librarykrystal/art-portfolio',
      webLink: 'https://www.galleryoffrost.com'
    },
    {
      id: 2,
      heading: 'The Rundown',
      subheading: `Artist's Paint Inventory & Wishlist App`,
      image: rundown,
      desc: `This two-week solo project lets users inventory, wishlist, and filter artist's paint supplies. This app uses React, Redux, postgreSQL, CSS, and Material-UI.`,
      gitLink: 'https://github.com/librarykrystal/artist-inventory',
      webLink: null
    },
    {
      id: 3,
      heading: 'Ideal Living Week',
      subheading: 'Mindfulness and Scheduling App',
      image: idealWeek,
      desc: `This group project for client Mick White's 100 Year Manifesto includes drag-and-drop prioritization, journaling, and scheduling out an ideal week.`,
      gitLink: 'https://github.com/librarykrystal/100ym-ideal-living-week',
      webLink: null
    },
    {
      id: 4,
      heading: 'My Movie Set',
      subheading: 'Film Cataloguing App',
      image: movieSet,
      desc: 'This weekend challenge displays a collection of clickable film posters from a database. A details page shows description and genre(s).',
      gitLink: 'https://github.com/librarykrystal/weekend-movie-sagas',
      webLink: null
    },
    {
      id: 5,
      heading: 'My Snaps Gallery',
      subheading: 'Gallery with Likes & Toggle Captions',
      image: gallery,
      desc: 'This weekend challenge showcases a set of photographs. Each photo has a like counter and can be clicked to toggle between image and caption.',
      gitLink: 'https://github.com/librarykrystal/weekend-react-gallery',
      webLink: null
    }
  ];

  return (
    <ThemeProvider theme={theme}>

      <div className="projectsHeaderBox">
        <Typography className="projectsHeaderText" variant="h4" fontWeight="bold" sx={{fontSize: 24}} gutterBottom>
          PROJECTS
        </Typography>
      </div>

      <div className="projectsOuterContainer">
        <div className="projectsInnerContainer">
          {projects.map(project => {
            return(
              <div key={project.id} className="projectContainer">
                {/* HEADING */}
                <div className="projectHeaderBox">
                  <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
                    {project.heading}
                  </Typography>
                  {/* SUBHEADING */}
                  <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
                    {project.subheading}
                  </Typography>
                </div>
                <div className="projectBody">
                  {/* IMAGE(S) */}
                  <div className="projectImages">
                    <img className="appImage" src={project.image}></img>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="projDescText">
                    <Typography variant="body1" mt={0} mb={1} gutterBottom>
                    {project.desc}
                    </Typography>
                  </div>
                  <div className="projectButtons">
                    {/* WEB LINK BUTTON — conditional, renders only if there is a web link */}
                    {project.webLink &&
                      <Button
                      sx={{ mt: 2, ml: 1, mr: 1, pr:1.5 }}
                        variant="contained"
                        color="info"
                        size="small"
                        startIcon={<BrushIcon />}
                        href={project.webLink}
                        >Visit the website
                      </Button>
                    }
                    {/* GITHUB LINK BUTTON */}
                    <Button
                    sx={{ mt: 2, ml: 1, mr: 1 }}
                      variant="contained"
                      color="info"
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.gitLink}
                      >See it on GitHub
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <center>
          <Typography variant="body1" color="white" gutterBottom>© Krystal Frost</Typography>
        </center>
        <br/>

      </div>
    </ThemeProvider>
  );
}

export default Projects;