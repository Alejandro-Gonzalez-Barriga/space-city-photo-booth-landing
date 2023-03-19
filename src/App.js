import logo from './spaceCityPhotoBoothLogoTransparent.png';
import './App.css';
import { ThemeProvider, Container, Button } from '@mui/material';
import SpaceAppBar from './components/SpaceAppBar';
import PhotoBoothAppbar from './components/appbar';
import theme from './styles/theme';

//may need to add theme provider and container to replace app div
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth='xl'
      sx={{
        background: '#fff'
      }}
      >
        <PhotoBoothAppbar/>
        <SpaceAppBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color='primary'>Flash</Button>
        {/*  <div className="App">
        <SpaceAppBar/>
        {/*
        appbar
        banner
        promotions?
        Title/header?
        products
        footer
        searchbox
        appdrawer
         *}
        <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          🔥SpaceCityLanding🔥
        </p>
        </header>
        <Container maxWidth="xl" sx={{background: '#fff'}}>
     
         <h1>
          🔥Container🔥
        </h1>
          <img src={logo} className="App-logo" alt="logo" />
        </Container>
        </div>*/}
    </Container>
  </ThemeProvider>


   
  );
}

export default App;
