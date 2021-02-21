import React from 'react'
import FlightController from './FlightController'
import hero from '../media/flights_3.svg';
import { PageContainer, Container_50 } from '../styled/containers/Container'
import {HeroText} from './styled/HomeStyled'



const Home = () =>{
  return (
    <PageContainer>
      
        <img srcSet={hero} />
        <Container_50>
        <HeroText>Flights</HeroText>
        <FlightController/>
        {/* <h1>ADVISORY</h1> */}
        {/* <h1>SUGGESTIONS</h1> */}
        </Container_50>
      
    </PageContainer>
  );
}

export default Home