import './App.css';
import { ThemeProvider } from '@mui/material';
import PhotoBoothAppbar from './components/appbar';
import PhotoBoothBanner from './components/banner';
import Footer from "./components/footer";
import theme from './styles/theme';

//may need to add theme provider and container to replace app div
function App() {
  return (
    <ThemeProvider theme={theme}>
      <PhotoBoothAppbar/>
      <PhotoBoothBanner/>
      <Footer />
    </ThemeProvider>  
  );
}

export default App;
