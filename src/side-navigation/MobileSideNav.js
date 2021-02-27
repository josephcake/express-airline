import React, {useState} from 'react';
import styled from 'styled-components';

const MobileSideNavContainer = styled.div`
  z-index:999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 20px;
  /* background: rgba(0,0,0,0.2); */
  visibility: hidden;
  @media screen and (max-width: 1000px) {
    visibility: visible;
  }
`;

const MobileSideNavContentContainer = styled.div`

`

const MobileSideNav = () =>{
  const [touchStartVal, setTouchStartVal] = useState({ x: null, y: null });
  const [touchEndVal, setTouchEndVal] = useState({ x: null, y: null });
  const [displaySlider, setDisplaySlider] = useState(false);

  const handleTouchMove = (e) => {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    console.log(x);
    setTouchEndVal((prevState) => ({
      ...prevState,
      x,
      y,
    }));
  };

  const handleTouchStart = (e) => {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    // console.log(x,y)
    setTouchStartVal((prevState) => ({
      ...prevState,
      x,
      y,
    }));
  };
  
  const handleTouchEnd = () => {
    console.log(touchStartVal);
    console.log(touchEndVal);
    //check difference of x & y
    if (Math.abs(touchStartVal.y - touchEndVal.y) < 30) {
      if (touchEndVal.x > touchStartVal.x + 50) {
        setDisplaySlider(!displaySlider);
      }
    }
  };
  return (
    <MobileSideNavContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={displaySlider ? "red" : "blue"}
    ></MobileSideNavContainer>
  );
}

export {MobileSideNav}