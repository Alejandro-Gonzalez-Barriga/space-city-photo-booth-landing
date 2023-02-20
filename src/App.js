import logo from './photoBoothLogo.png';
import './App.css';
import { Container } from '@mui/material';
import SpaceAppBar from './components/SpaceAppBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          🔥 SpaceCityLanding 🔥
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
        <SpaceAppBar/>
         <h1>
          🔥 SpaceCityLandingContainer 🔥
        </h1>
       </Container>
    </div>
  );
}

export default App;
