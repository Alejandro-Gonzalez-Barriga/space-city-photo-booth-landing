import React, { useState, useEffect } from 'react';
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { ListItemText } from "@mui/material";
import { Colors } from "../../styles/theme";
import logo from '../../spaceCityPhotoBoothLogoIcon.svg';



export default function PhotoBoothAppbarDesktop({ matches}) {
    const [hasScrolled, setHasScrolled] =  useState(false); 
      
    useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
       <AppbarContainer sx={{background: hasScrolled ? "rgba(0,0,0,0.6)" : "transparent"}}> 
       {console.log(hasScrolled)}
        <img src={logo} className="App-logo2" alt="logo" />
        <AppbarHeader sx={{color: hasScrolled ? Colors.white : Colors.secondary}}>Space City Photo Booth {hasScrolled.toString()}</AppbarHeader>
        <MyList type="row" sx={{color: hasScrolled ? Colors.white : Colors.secondary}}>
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