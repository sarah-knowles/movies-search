import React from 'react';
import './index.css';
import Hero from './Components/Hero/Hero';
import {MovieState} from './Context/MovieContext';

const App = () => {
  return (
    <MovieState>
     <Hero />
    </MovieState>
  );
}

export default App;
