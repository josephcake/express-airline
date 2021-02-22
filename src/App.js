import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'
import Home from './home/Home'
import {Theme} from './styled/theme/Theme'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  background: ${(props) =>
    props.theme.dark_bg ? props.theme.light_bg : props.theme.dark_bg};
  color: ${(props) =>
    props.theme.dark_bg ? props.theme.dark_bg : props.theme.light_bg};
`;
const Container_Row = styled.div`
  display:flex;
  justify-content:space-between;
  position:absolute;
  bottom:0;
  height:calc(100vh - 70px);
  width:100%;
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppDiv>
        <Nav/>
        <Container_Row>
          <SideNav/>
          <Home/>
        </Container_Row>        
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
