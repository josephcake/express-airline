import React from 'react'
import styled from 'styled-components'
import {NavItem} from '../../styled/components/Component'
import {ItemContainer_Auto} from '../../styled/containers/Container'


const NavItemContainer = () =>{
  return(
    <ItemContainer_Auto>
      <NavItem>item</NavItem>
      <NavItem>item</NavItem>    
    </ItemContainer_Auto>
  )
}

export {NavItemContainer}