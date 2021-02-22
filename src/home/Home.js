import React from 'react'
import styled from 'styled-components'
import FlightController from './FlightController'
import hero from '../media/express-ico.svg';
// import hero from '../media/flights_3.svg';
import { Container_50 } from '../styled/containers/Container'
import {HeroText} from './styled/HomeStyled'
import {ReactSVG} from 'react-svg'

const HomeContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content:center;
  align-items:center;

`

const Home = ({theme}) =>{
  return (
    <HomeContainer>
      <ReactSVG
        beforeInjection={(svg) => {          
          console.log(theme)
          const g = svg.firstElementChild;
          svg.classList.add("svg-class-name");
          g.setAttribute("style", `fill: orange`);
        }}
        src={hero}
      />
      {/* <HeroImg>{hero}</HeroImg> */}
      <Container_50>
        <HeroText>Welcome to Express Air</HeroText>
        <FlightController />
        {/* <h1>ADVISORY</h1> */}
        {/* <h1>SUGGESTIONS</h1> */}
      </Container_50>
    </HomeContainer>
  );
}

export default Home