import React, {memo} from 'react'
import styled, {css} from 'styled-components'


// console.log(props)
const MobileSideNavContentContainer = styled.div`
  /* z-index:99; */
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  /* background-color: darkgoldenrod; */
  transition: all 1.5s ease-in-out;  
  /* transform: translateX(-100%); */
  
  /* background-color: lightgray; */
`;


const MobileSideNavContent = () =>{

  return (
    <MobileSideNavContentContainer/>
  )
}

// const areEqual = (prev, next) => {
//   if (prev > 0 && next > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


// export default memo(MobileSideNavContent, areEqual)
export default MobileSideNavContent