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
  padding:0px 5px;
  /* background:gray; */
  border-right:solid 1px black;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const ItemImage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  font-size:25px;
`;
const SideNavSpacer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 90%;
  padding: 3px;
  margin: 3px;
  border: 1px solid black;
  border-radius: 10px;
`;

const itemsArray = ['ph',1,2,3,4,5]
const items = itemsArray.map(i=>{
  return <NavItem><ItemImage>image</ItemImage><ItemText>{i}</ItemText></NavItem>  
})
const SideNav = () => {
  return (
    <Nav>
      <ItemContainer_Column>
        <SideNavSpacer/>
        {items}
      </ItemContainer_Column>
      <ItemContainer_Column>
        <NavItem>0</NavItem>        
      </ItemContainer_Column>
      
    </Nav>
  );
}

export default SideNav