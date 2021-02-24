import React from 'react';
import styled from 'styled-components';
import { ItemContainer_Row, ItemContainer_Column } from "../styled/containers/Container";
import { NavItem } from "../styled/components/Component";

const Nav = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  /* height:100%; */
  /* width:auto; */
  padding:0px 5px;
  /* background:gray; */
  /* border-right:solid 1px black; */
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  @media screen and (max-width: 1000px){
    display:none;
  }
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
  font-size:2rem;
`;
const SideNavSpacer = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  top:100px;
  left:0;  
  /* visibility: hidden; */
`;

const itemsArray = ['ph',1,2,3,4,5]
const items = itemsArray.map(i=>{
  return <NavItem key={i}><ItemImage>image</ItemImage><ItemText>{i}</ItemText></NavItem>  
})
const SideNav = () => {
  return (
    <Nav>
      <ItemContainer_Column>
        <SideNavSpacer>
          {items}
        </SideNavSpacer>
      </ItemContainer_Column>
      <ItemContainer_Column>
        <NavItem>0</NavItem>        
      </ItemContainer_Column>
      
    </Nav>
  );
}

export default SideNav