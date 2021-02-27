import React, {useState, useEffect} from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'
import {MobileSideNav} from './side-navigation/MobileSideNav'
import Home from './home/Home'
import {Theme} from './styled/theme/Theme'


const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  background: ${(props) =>
    props.theme.dark_bg ? props.theme.light_bg : props.theme.dark_bg};
  color: ${(props) =>
    props.theme.dark_bg ? props.theme.dark_bg : props.theme.light_bg};
`;
const Container = styled.div`
  display:flex;
  justify-content:space-between;
  /* position:absolute;
  bottom:0; */
  height:100%;
  width:100%;
`

function App() {
  useEffect(() => {}, []);
  const [scrollVal, setScrollVal] = useState(0);
  const handleContainerScroll = () => {
    // console.log(window.scrollY);
    setScrollVal(window.scrollY);
  };


  return (
    <ThemeProvider theme={Theme}>
      <AppDiv onWheel={handleContainerScroll}>
        <Nav scrollVal={scrollVal} />
        <MobileSideNav/>
        <Container>
          <SideNav />
          <Home />
        </Container>
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
