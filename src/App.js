import logo from './spaceCityPhotoBoothLogoTransparent.png';
import './App.css';
import { Container } from '@mui/material';
import SpaceAppBar from './components/SpaceAppBar';

function App() {
  return (
    <div className="App">
     <SpaceAppBar/>
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          🔥SpaceCityLanding🔥
        </p>
      </header>
       <Container maxWidth="xl" sx={{background: '#fff'}}>
        {/*
        appbar
        banner
        promotions?
        Title/header?
        products
        footer
        searchbox
        appdrawer
         */}
         <h1>
          🔥Container🔥
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
       </Container>
    </div>
  );
}

export default App;
