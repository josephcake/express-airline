import React, {useState, useEffect} from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'
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

const MobileSideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30%;
  /* background: rgba(0,0,0,0.2); */
  visibility: hidden;
  @media screen and (max-width: 1000px) {
    visibility: visible;
  }
`;


function App() {
  useEffect(() => {}, []);
  const [scrollVal, setScrollVal] = useState(0);
  const [touchStartVal, setTouchStartVal] = useState({x:null, y:null});
  const [touchEndVal, setTouchEndVal] = useState({x:null, y:null});
  const [displaySlider, setDisplaySlider] = useState(false)
  const handleContainerScroll = () => {
    // console.log(window.scrollY);
    setScrollVal(window.scrollY);
  };

  const debounce = function(fn, arg,delay){    
    let timeoutId;
    
    return function(){
      if(timeoutId){
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(fn(arg),delay);
    }
  }

  const handleTouchMove = (e) => {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    if(x>touchStartVal.x){
      setDisplaySlider(!displaySlider)
    }
    else{
      console.log(x)
      console.log(touchStartVal.x)
    }
    // setTouchEndVal(
    //   (prevState) => ({
    //     ...prevState,
    //     x,
    //     y,
    // }));
  };
  
  const handleTouchStart = (e) =>{
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    // console.log(x,y)
    setTouchStartVal(prevState => ({
      ...prevState,
      x,y
    }));
    
  }

  return (
    <ThemeProvider theme={Theme}>
      <AppDiv onWheel={handleContainerScroll}>
        <Nav scrollVal={scrollVal} />
        <MobileSideNav
          onTouchStart={handleTouchStart}
          onTouchMove={(e)=>debounce(handleTouchMove, e, 300)}
          className={displaySlider?'red':'blue'}
        />
        <Container>
          <SideNav />
          <Home />
        </Container>
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
