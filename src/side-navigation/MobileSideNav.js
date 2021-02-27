import React, {useState} from 'react';
import styled from 'styled-components';
import MobileSideNavContent from './MobileSideNavContent';


const MobileSideNavContainer = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  transform: translateX(${(props) => (props.isSideNavOpen ? 0 : -100)}%);

   @media screen and (max-width: 1000px) {
    transition: all 2s ease-in-out;
    transform: translateX(${({isSideNavOpen}) => isSideNavOpen ? 0 : -100}%);
  }
`;


const MobileSideNav = ({isSideNavOpen}) =>{
  // console.log(isSideNavOpen);

  return (
    <MobileSideNavContainer isSideNavOpen={isSideNavOpen}>
      <MobileSideNavContent />
    </MobileSideNavContainer>
  );
}

export default MobileSideNav