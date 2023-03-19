import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@material-ui/icons";
import { AppbarContainer } from "../../styles/appbar";

export default function PhotoBoothAppbarMobile({ matches}) {
    return (
       <AppbarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
       </AppbarContainer>
    );
}