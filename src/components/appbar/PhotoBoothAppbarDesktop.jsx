import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import logo from '../../spaceCityPhotoBoothLogoIcon.svg';


export default function PhotoBoothAppbarDesktop({ matches}) {
    return (
       <AppbarContainer> 
        <img src={logo} className="App-logo2" alt="logo" />
        <AppbarHeader>Space City Photo Booth</AppbarHeader>
       </AppbarContainer>
    );
}