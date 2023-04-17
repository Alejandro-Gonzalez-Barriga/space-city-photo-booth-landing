import React, { useState, useEffect } from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import PhotoBoothAppbarDesktop from "./PhotoBoothAppbarDesktop";
import PhotoBoothAppbarMobile from "./PhotoBoothAppbarMobile";

export default function PhotoBoothAppbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
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
  },);
  
  return (
    <>
      {matches ? <PhotoBoothAppbarMobile matches={matches} hasScrolled={hasScrolled}/> : <PhotoBoothAppbarDesktop matches={matches} hasScrolled={hasScrolled}/>}
    </>
  );
}