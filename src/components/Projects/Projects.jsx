import React, { useLayoutEffect } from "react";

import artSiteLanding from './artSite_landing.png';
import rundownHome from './theRundown_home.png';
import rundownDetails from './theRundown_details.png';
import rundownEdit from './theRundown_edit.png';
import movieSetList from './myMovieSet_list.png';
import movieSetDetails from './myMovieSet_details2.png';
import galleryAll from './gallerySnaps_all.png';
import galleryDesc1 from './gallerySnaps_desc1.png';
import galleryDesc2 from './gallerySnaps_desc2.png';
import idealQuestions from './idealLivingWeek_questions.png';
import idealPriorities from './idealLivingWeek_priorities.png';


// Material UI Imports
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

// Material UI Theming
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
      heading: 'xxx',
      subheading: 'xxx',
      image: 'source',
      desc: 'xxx',
      gitLink: 'xxx',
      webLink: 'xxx'
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

        {/* THE RUNDOWN */}
        <div className="projectContainer">
            <div className="projectHeaderBox">
              <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
                Fine Art Portfolio Site
              </Typography>
              <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
                Deployed website showcasing artwork
              </Typography>
            </div>
            <div className="projectBody">
              <div className="projectImages">
                <img className="appImage1" src={artSiteLanding}></img>
                {/* <img className="appImageRundown" src={rundownDetails}></img> */}
                {/* <img className="appImageRundown" src={rundownEdit}></img> */}
              </div>
              <div className="projDescText">
                <Typography variant="body1" mt={0} mb={1} gutterBottom>
                This personal portfolio site, built with React, features paintings, photography, and updates on my latest and in-progress work.
                </Typography>
              </div>
              <div className="projectButtons">
                <Button
                sx={{ ml: 1, mr: 1, pr:1.5 }}
                  variant="contained"
                  color="info"
                  size="small"
                  startIcon={<BrushIcon />}
                  href="https://www.galleryoffrost.com"
                  >Visit the website
                </Button>
                <Button
                sx={{ ml: 1, mr: 1 }}
                  variant="contained"
                  color="info"
                  size="small"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/librarykrystal/art-portfolio"
                  >See it on GitHub
                </Button>
            </div>
          </div>
        </div>

        {/* THE RUNDOWN */}
        <div className="projectContainer">
            <div className="projectHeaderBox">
              <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
                The Rundown
              </Typography>
              <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
                Artist's Paint Inventory & Wishlist App
              </Typography>
            </div>
            <div className="projectBody">
              <div className="projectImages">
                <img className="appImageRundown" src={rundownHome}></img>
                <img className="appImageRundown" src={rundownDetails}></img>
                <img className="appImageRundown" src={rundownEdit}></img>
              </div>
              <div className="projDescText">
                <Typography variant="body1" mt={0} mb={0} gutterBottom>
                This two-week solo project lets users inventory, wishlist, and filter artist's paint supplies. This app uses React, Redux, postgreSQL, CSS, and Material-UI.
                </Typography>
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

        {/* IDEAL LIVING WEEK */}
        <div className="projectContainer">
          <div className="projectHeaderBox">
            <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
              Ideal Living Week
            </Typography>
            <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
              Mindfulness and Scheduling App
            </Typography>
          </div>
          <div className="projectBody">
            <div className="projectImages">
              <img className="appImage2" src={idealQuestions}></img>
              <img className="appImage2" src={idealPriorities}></img>
            </div>
            <div className="projDescText">
                <Typography variant="body1" mt={0} mb={0} gutterBottom>
                This group project for client Mick White's 100 Year Manifesto includes drag-and-drop prioritization, journaling, and scheduling out an ideal week.
                </Typography>
              </div>
            <div className="projectButtons">
              <Button
              variant="contained"
              color="info"
              size="small"
              startIcon={<GitHubIcon />}
              href="https://github.com/librarykrystal/100ym-ideal-living-week"
              >See it on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* MY MOVIE SET */}
        <div className="projectContainer">
          <div className="projectHeaderBox">
            <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold" gutterBottom>
              My Movie Set
            </Typography>
            <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
              Film Cataloguing App
            </Typography>
          </div>
          <div className="projectBody">
            <div className="projectImages">
              <img className="appImage2" src={movieSetList}></img>
              <img className="appImage2" src={movieSetDetails}></img>
            </div>
            <div className="projDescText">
                <Typography variant="body1" mt={0} mb={0} gutterBottom>
                This weekend challenge displays a collection of clickable film posters from a database.  A details page shows description and genre(s).
                </Typography>
              </div>
            <div className="projectButtons">
              <Button
              variant="contained"
              color="info"
              size="small"
              startIcon={<GitHubIcon />}
              href="https://github.com/librarykrystal/weekend-movie-sagas"
              >See it on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* MY SNAPS GALLERY */}
        <div className="projectContainer">
          <div className="projectHeaderBox">
            <Typography className="projectHeaderText" variant="h5" mt={0} mb={0} fontWeight="bold"  gutterBottom>
              My Snaps Gallery
            </Typography>
            <Typography className="projectHeaderText" variant="body1" mt={0} mb={0} gutterBottom>
              Gallery with Likes & Toggle Captions
            </Typography>
          </div>
          <div className="projectBody">
            <div className="projectImages">
              <img className="appImage2" src={galleryDesc2}></img>
              <img className="appImage2" src={galleryDesc1}></img>
            </div>
            <div className="projDescText">
                <Typography variant="body1" mt={0} mb={0} gutterBottom>
                This weekend challenge showcases a set of photographs.  Each photo has a like counter and can be clicked to toggle between image and caption.
                </Typography>
              </div>
            <div className="projectButtons">
              <Button
              variant="contained"
              color="info"
              size="small"
              startIcon={<GitHubIcon />}
              href="https://github.com/librarykrystal/weekend-react-gallery"
              >See it on GitHub
              </Button>
            </div>
          </div>
        </div>
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