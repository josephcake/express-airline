import React, {useState} from 'react';
import styled from 'styled-components';
import MobileSideNavContent from './MobileSideNavContent';

const MobileSideNavContainer = styled.div`
  z-index:999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 20px;
  /* background: rgba(0,0,0,0.2); */
  /* visibility: hidden; */
  display:none;
  @media screen and (max-width: 1000px) {
    /* visibility: visible; */
    display:flex;
  }
`;



const MobileSideNav = () =>{
  

  
  return (
    <MobileSideNavContainer      
    >
      <MobileSideNavContent
        
      />
    </MobileSideNavContainer>
  );
}

export {MobileSideNav}