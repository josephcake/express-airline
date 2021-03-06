import React,{memo} from 'react';
import styled from 'styled-components';
import { ItemContainer_Row } from "../styled/containers/Container";
// import { NavItem } from "../styled/components/Component";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  /* padding: 5px; */
  position: sticky;
  top: 0;
  right: 0;
  background: white;
  z-index: 9999;
  font-size: clamp(2rem, 2vw, 3rem);
  @media screen and (max-width: 600px) {
    /* font-size: 20px; */
    position: fixed;
    height: 70px;
  }
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 90%;
  padding: 10px clamp(0px, 1vw, 10px);
  margin: 10px clamp(0px, 1vw, 10px);
  /* border: 1px solid black; */
  /* border-radius: 10px; */
`;

const Profile = styled.div`
  height: 40px;
  width: 40px;
  border: solid 1px black;
  border-radius: 50%;
  @media screen and (max-width: 1000px) {
    height: 50px;
    width: 50px;
  }
`;

const Nav = ({scrollVal, setIsSideNavOpen}) =>{  

  return (
    <Navbar className={`${scrollVal>0?'bbs':'_out'}`}>
      <ItemContainer_Row>
        {/* <NavItem onClick={setIsSideNavOpen}>toggle</NavItem> */}
        <NavItem>logo</NavItem>
      </ItemContainer_Row>
      <ItemContainer_Row>
        <NavItem>extra</NavItem>
        <NavItem><Profile/></NavItem>
      </ItemContainer_Row>
    </Navbar>
  )
}
const areEqual = (prev, next)=>{
  if(prev > 0 && next > 0){
    return true
  }else{    
    return false
  }
}

export default memo(Nav,areEqual)