import React from 'react'
import styled from 'styled-components'
import {ItemContainer_Row, ItemContainer_Column} from '../styled/containers/Container'

const FCDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  width: 100%;
  border: solid 1px black;
  margin: 25px 0;

  @media screen and (max-width: 1000px) {
    /* width:auto; */
    /* padding:20px; */
    justify-content: center;
    align-items: center;
  }
`;
const DestinationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  /* border: solid 1px black; */
  margin: 25px 0;
  & h3 {
    width: 100%;
    border: solid 1px black;
    font-size: clamp(2rem, 2vw, 3rem);
    @media screen and (max-width: 1000px) {
      display:flex;
      align-items:center;
      height:50px;
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
`;

const FromTo = styled.div`
  display: flex;
  width: 100%;
  /* @media screen and (max-width: 1000px) {
    flex-direction:column;
  } */
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
        <FromTo>
          <h3>From</h3>
          <h3>To</h3>
        </FromTo>
        <h3>Date</h3>
      </DestinationContainer>
    </FCDiv>
  );
}
export default FlightController