import React from 'react'
import styled from 'styled-components'
import {ItemContainer_Row, ItemContainer_Column} from '../styled/containers/Container'

const FCDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  width: 100%;
  border: solid 1px black;
  @media screen and (max-width: 1000px) {
    /* width:auto; */
    /* padding:20px; */
  }
`;
const DestinationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  border: solid 1px black;
  & h3 {
    width: 100%;
    border: solid 1px black;
  }
  @media screen and (max-width: 1000px) {
    /* width:auto; */
    padding: 0 10px;
  }
`;
const FlightController = () =>{
  return (
    <FCDiv>
      <ItemContainer_Row>
        <h5>trip type</h5>
        <h5>passenger num</h5>
        <h5>flight type (first/eco/business)</h5>
      </ItemContainer_Row>
      <DestinationContainer>
        <h3>From</h3>
        <h3>To</h3>
        <h3>Date</h3>
      </DestinationContainer>
    </FCDiv>
  );
}
export default FlightController