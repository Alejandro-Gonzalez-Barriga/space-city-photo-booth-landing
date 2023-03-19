import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import logo from '../../spaceCityPhotoBoothLogoIcon.svg';
import { ListItemText } from "@mui/material";


export default function PhotoBoothAppbarDesktop({ matches}) {
    return (
       <AppbarContainer> 
        <img src={logo} className="App-logo2" alt="logo" />
        <AppbarHeader>Space City Photo Booth</AppbarHeader>
        <MyList type="row">
            <ListItemText primary="About Us"/>
            <ListItemText primary="Gallery"/>
            <ListItemText primary="Packages"/>
            <ListItemText primary="Faq's"/>
            <ListItemText primary="Contact"/>
            <ListItemText primary="Languages"/>
        </MyList>
       </AppbarContainer>
    );
}