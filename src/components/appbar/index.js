import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import PhotoBoothAppbarDesktop from "./PhotoBoothAppbarDesktop";
import PhotoBoothAppbarMobile from "./PhotoBoothAppbarMobile";

export default function PhotoBoothAppbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      {matches ? <PhotoBoothAppbarMobile matches={matches}/> : <PhotoBoothAppbarDesktop matches={matches}/>}
    </>
  );
}