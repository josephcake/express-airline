import React from 'react';
import styled from 'styled-components';
import { ItemContainer_Row, ItemContainer_Column } from "../styled/containers/Container";
import { NavItem } from "../styled/components/Component";

const Nav = styled.div`
  position:fixed;
  top:0;
  left:0;
  height:100%;
  width:auto;
  padding:0 5px;
  /* background:gray; */
  border-right:solid 1px black;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const itemsArray = [0,1,2,3,4,5]
const items = itemsArray.map(i=>{
  return <NavItem><h1>image</h1><h3>{i}</h3></NavItem>  
})
const SideNav = () => {
  return (
    <Nav>
      <ItemContainer_Column>
        {items}
      </ItemContainer_Column>
      <ItemContainer_Column>
        <NavItem>0</NavItem>        
      </ItemContainer_Column>
      
    </Nav>
  );
}

export default SideNav