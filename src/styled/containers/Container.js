import styled from 'styled-components'

const ItemContainer_Row = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const ItemContainer_Column = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;  
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container_80 = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;


export {ItemContainer_Row, ItemContainer_Column, PageContainer, Container_80}