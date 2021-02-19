import React from 'react';
import styled from 'styled-components';
import { ItemContainer_Row } from "../styled/containers/Container";
import { NavItem } from "../styled/components/Component";


const Navbar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:50px;
  padding:5px;
  position:fixed;
  top:0;
  left:0;
  z-index:999;
  border-bottom:solid 1px black;
  /* background-color:black; */
`

const Nav = () =>{
  return (
    <Navbar>
      <ItemContainer_Row>
        <NavItem>toggle</NavItem>
        <NavItem>logo</NavItem>
      </ItemContainer_Row>
      <ItemContainer_Row>
        <NavItem>extra</NavItem>
        <NavItem>profile</NavItem>
      </ItemContainer_Row>
    </Navbar>
  )
}

export default Nav