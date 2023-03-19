import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@material-ui/icons";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import logo from '../../spaceCityPhotoBoothLogoIcon.svg';


export default function PhotoBoothAppbarMobile({ matches}) {
    return (
       <AppbarContainer>
        <img src={logo} className="App-logo2" alt="logo" />
        <AppbarHeader>Photo Booth</AppbarHeader>
            <IconButton>
                <MenuIcon/>
            </IconButton>
       </AppbarContainer>
    );
}