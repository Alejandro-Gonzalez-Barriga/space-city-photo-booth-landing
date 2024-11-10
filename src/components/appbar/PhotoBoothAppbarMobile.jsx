import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material"; // Updated import
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { Colors } from "../../styles/theme";
import logo from '../../spaceCityPhotoBoothLogoIcon.svg';

export default function PhotoBoothAppbarMobile({ matches, hasScrolled }) {
    return (
       <AppbarContainer sx={{ background: hasScrolled ? "rgba(0,0,0,0.6)" : "transparent" }}>
          <img src={logo} className="App-logo2" alt="logo" />
          <AppbarHeader sx={{ color: hasScrolled ? Colors.white : Colors.secondary }}>
              Photo Booth
          </AppbarHeader>
          <IconButton sx={{ color: hasScrolled ? Colors.white : Colors.secondary }}>
              <MenuIcon />
          </IconButton>
       </AppbarContainer>
    );
}
