// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from 'react' ;
import Hero from '../components/Hero' ;
import Services from '../components/Services' ;
import Container from '../components/Container' ;
import Instruct from '../components/Instruct';
import Notice from '../components/Notice'
const Home = () => {
  return (
    <div>
      <Hero /> 
      <Instruct/>
      <Services /> 
      <Notice/>
      <Container />
    </div>
  );
};

export default Home;
