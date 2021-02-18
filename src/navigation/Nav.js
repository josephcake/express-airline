import React from 'react';
import styled from 'styled-components';
import {NavItem} from './styled/NavItem'

const Navbar = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  width:100%;
  height:50px;
  padding:5px;
`

const Nav = () =>{
  return (
    <Navbar>
      <NavItem>Nav-item</NavItem>
      <NavItem>Nav-item</NavItem>
      <NavItem>Nav-item</NavItem>
    </Navbar>
  )
}

export default Nav