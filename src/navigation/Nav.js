import React from 'react';
import styled from 'styled-components';
import { ItemContainer_Auto } from "../styled/containers/Container";
import { NavItem } from "../styled/components/Component";


const Navbar = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height:50px;
  padding:5px;
`

const Nav = () =>{
  return (
    <Navbar>
      <ItemContainer_Auto>
        <NavItem></NavItem>
        <NavItem></NavItem>
      </ItemContainer_Auto>
      <ItemContainer_Auto>
        <NavItem></NavItem>
        <NavItem></NavItem>
      </ItemContainer_Auto>
    </Navbar>
  )
}

export default Nav