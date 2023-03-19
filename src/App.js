import logo from './spaceCityPhotoBoothLogoTransparent.png';
import './App.css';
import { Container } from '@mui/material';
import SpaceAppBar from './components/SpaceAppBar';

//may need to add theme provider and container to replace app div

function App() {
  return (
    <div className="App">
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
         */}
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
    </div>
  );
}

export default App;
