import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'
import Home from './home/Home'
import {Theme} from './styled/theme/Theme'

const AppDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  width:100vw;
  overflow-x:hidden;
  overflow-y:auto;
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppDiv>
        <Nav/>        
        <SideNav/>
        <Home/>
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
