import React from 'react'
import styled from 'styled-components'
import {USA_code} from '../data/airports'
import {USA_cities} from '../data/airports_city'
import {ItemContainer_Row, ItemContainer_Column} from '../styled/containers/Container'

const FCDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 25px 0;
  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;
  }
`;
const DestinationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
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
    width: 90%;
  }
`;
const FromTo = styled.div`
  display: flex;
  width: 100%;  
`;
const Input = styled.input`
  border: solid 1px black;
  font-size: clamp(2rem, 2vw, 3rem);
`;

const handleChange = (e) =>{
  console.log(e.target.value)
  let code = e.target.value.toLowerCase()
  if(USA_cities[code]){
    console.log(USA_cities[code])
  }
}

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
          <Input type={'text'} placeholder={'From'} onChange={handleChange}/>
          <h3>To</h3>
        </FromTo>
        <h3>Date</h3>
      </DestinationContainer>
    </FCDiv>
  );
}
export default FlightController