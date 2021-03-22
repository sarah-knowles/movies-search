import React from 'react';
import Container from '../Reuseable Components/Container';
import HeroNavLogo from './HeroNavLogo';
import HeroNavMenu from './HeroNavMenu';
import HeroNavSearch from './HeroNavSearch';
import {useContext} from 'react';
import {MovieContext} from '../../Context/MovieContext';

const HeroNav = () => {
  const {hiddenMenu, setHiddenMenu} = useContext(MovieContext);

  return (
    <nav className='nav-page'>
      <Container>
        <div className='wrapper'>
          <HeroNavLogo />
          <HeroNavMenu />
        </div>
        <HeroNavSearch />
        <i onClick={() => setHiddenMenu(!hiddenMenu)} 
        id='burger-menu' 
        className={hiddenMenu ? 'fas fa-bars' : 'fas fa-times'}></i>
      </Container>
    </nav>
  );
};


export default HeroNav;