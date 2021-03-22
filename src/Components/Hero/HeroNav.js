import React from 'react';
import Container from '../Reuseable Components/Container';
import HeroNavLogo from './HeroNavLogo';
import HeroNavMenu from './HeroNavMenu';

const HeroNav = () => {
  return (
    <nav>
      <Container>
        <div className='wrapper'>
          <HeroNavLogo />
          <HeroNavMenu />
        </div>
      </Container>
    </nav>
  );
};


export default HeroNav;