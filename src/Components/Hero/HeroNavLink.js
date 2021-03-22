import React from 'react'
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

const HeroNavLink = ({btnText}) => {
  const { setHiddenMenu, activeLink, setActiveLink } = useContext(MovieContext);
  return (
   <button className='link-btn'
   onClick={() => {
     setActiveLink(btnText)
     setHiddenMenu(true)    
    }} >{btnText}</button>
  );
};

export default HeroNavLink;