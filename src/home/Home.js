import React from 'react'
import styled from 'styled-components'
import FlightController from './FlightController'
import hero from '../media/express-ico.svg';
// import hero from '../media/flights_3.svg';
import { Container_50 } from '../styled/containers/Container'
// import {HeroText} from './styled/HomeStyled'
import {ReactSVG} from 'react-svg'

const HomeContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  justify-content:center;
  align-items:center;
`
const HeroText = styled.h1`
  font-size: 50px;
  font-weight: 300;
  @media screen and (max-width: 1000px) {
    font-size:60px;
  }
`;

const Home = () =>{
  return (
    <HomeContainer>
      <ReactSVG
        beforeInjection={(svg) => {          
          // console.log(theme)
          const g = svg.firstElementChild;
          svg.classList.add("svg-class-name");
          svg.setAttribute("style", `width: 200px; height: 200px;`);
          g.setAttribute("style", `fill: orange;`);
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