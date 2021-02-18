import styled from "styled-components";

const OuterDiv = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  border: solid orange 1px;
  background-color:${props=>(props.theme.light?props.theme.dark:props.theme.dark)};
`

export {OuterDiv}