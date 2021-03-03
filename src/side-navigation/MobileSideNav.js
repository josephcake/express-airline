import React, {useState} from 'react';
import styled from 'styled-components';
import MobileSideNavContent from './MobileSideNavContent';


const MobileSideNavContainer = styled.div`
  /* z-index: 999; */
  position: relative;
  top: 0;
  /* width: 100vw; */
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  /* transform: translateX(${(props) => (props.isSideNavOpen ? 0 : -100)}%); */
  display:none;
   @media screen and (max-width: 600px) {
     display:flex;
  }
`;


const MobileSideNav = ({isSideNavOpen}) =>{
  // console.log(isSideNavOpen);

  return (
    <MobileSideNavContainer isSideNavOpen={isSideNavOpen} className={'mobile'}>
      <MobileSideNavContent />
    </MobileSideNavContainer>
  );
}

export default MobileSideNav