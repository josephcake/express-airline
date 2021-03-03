import React, {useState, useEffect} from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'
import MobileSideNav from './side-navigation/MobileSideNav'
import Home from './home/Home'
import {Theme} from './styled/theme/Theme'

const AppContainer = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100%;
  overflow-y:hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-snap-points-x: repeat(100vw);
  & > div {
    position:relative;
    width:100vw;
    min-width:100vw;
    scroll-snap-align: center;
    scroll-snap-stop: always:
  }
`;

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* width: 100vw; */
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  background: ${(props) =>
    props.theme.dark_bg ? props.theme.light_bg : props.theme.dark_bg};
  color: ${(props) =>
    props.theme.dark_bg ? props.theme.dark_bg : props.theme.light_bg};
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1000px) {
    top:70px;
    position:relative;
  }
`;

function App() {
  // useEffect(() => {}, []);
  const [scrollVal, setScrollVal] = useState(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const handleContainerScroll = () => {
    // console.log(window.scrollY);
    setScrollVal(window.scrollY);
  };

  const handleSideNavToggle = () =>{
    // console.log(isSideNavOpen)
    setIsSideNavOpen(!isSideNavOpen)
  }

  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <MobileSideNav isSideNavOpen={isSideNavOpen}/>
        <HomeDiv onWheel={handleContainerScroll} className={'app'}>
          <Nav scrollVal={scrollVal} setIsSideNavOpen={handleSideNavToggle}/>
          <Container>
            <SideNav />
            <Home />
          </Container>        
        </HomeDiv>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
