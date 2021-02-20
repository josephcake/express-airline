import React from 'react'
import hero from '../media/flights_3.svg';

import { PageContainer, Container_80 } from '../styled/containers/Container'


const Home = () =>{
  return (
    <PageContainer>
      <Container_80>
        <img srcSet={hero} />
        <h1>FLIGHT</h1>
        <h1>FLIGHT CONTROLLER</h1>
        <h1>ADVISORY</h1>
        <h1>SUGGESTIONS</h1>
      </Container_80>
    </PageContainer>
  );
}

export default Home