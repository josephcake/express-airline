import React, {memo} from 'react'
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
  font-size: clamp(2.5rem, 3vw, 5rem);
  /* font-size: 40px; */
  font-weight: 300;
  @media screen and (max-width: 1000px) {
  }
`;
const Suggestions = styled.div`
  display: flex;
  /* flex-direction:column; */
  width: 100%;
  height: 135px;
  /* padding:5px; */
  background: gray;
  border-radius: 15px;
  @media screen and (max-width: 1000px) {
    height: clamp(200px, 30vw, 300px);
    width: clamp(300px, 90vw, 1000px);
    margin: auto;
  }
`;

const SuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin: 0 5px 0 0;  
  & ${Suggestions}:nth-child(1) {
    margin: 0 5px 5px 0;
  }
  & ${Suggestions}:nth-child(2) {
    margin: 5px 5px 5px 0;
  }
  & ${Suggestions}:nth-child(3) {
    margin: 5px 5px 0 0;
  }
  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 30px 20px;
    
  }
`;

const ExploreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 5px 0;
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin:20px 0;
  }
`;
const ExploreMap = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 1000px) {
    width:100%;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
  background: skyblue;
  border-radius: 15px;
  @media screen and (max-width: 1000px) {
    height: clamp(300px, 90vw, 600px);
    width: clamp(300px, 90vw, 1000px);
    margin:auto;
  }
`;
console.log('home')
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
        <ExploreContainer>
          <SuggestionContainer>
            <Suggestions></Suggestions>
            <Suggestions></Suggestions>
            <Suggestions></Suggestions>
          </SuggestionContainer>
          <ExploreMap>
            <Map></Map>
          </ExploreMap>
        </ExploreContainer>
      </Container_50>
    </HomeContainer>
  );
}

export default memo(Home)