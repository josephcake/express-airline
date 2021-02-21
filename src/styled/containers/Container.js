import styled, {css} from 'styled-components'

const flexAuto = css`
  display: flex;
  height: auto;
  width: auto;
`;

const ItemContainer_Row = styled.div`
  ${flexAuto}  
  /* justify-content: center; */
  /* padding:10px; */
  align-items: center;  
`;

const ItemContainer_Column = styled.div`
  ${flexAuto}
  flex-direction:column;
  /* padding: 10px; */
  /* justify-content: center; */
  align-items: center;
`;

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Container_50 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  @media screen and (max-width: 1000px) {
    width:100%;
    margin:20px;
  }
`;
const Container_80 = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;


export {ItemContainer_Row, ItemContainer_Column, PageContainer, Container_50, Container_80}