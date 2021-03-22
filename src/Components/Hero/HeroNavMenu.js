import React from 'react'
import HeroNavLink from './HeroNavLink';


const HeroNavMenu = () => {
  return (
    <div className='nav-menu'>
      
      <HeroNavLink btnText='Popular'/>
      <HeroNavLink btnText='All Movies'/>
      
    </div>
  );
};

export default HeroNavMenu;
