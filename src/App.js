import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import hero from './media/flights_3.svg'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'
import Home from './home/Home'

import {Theme} from './styled/theme/Theme'
import {Input} from './styled/components/Input'
import {PageContainer, Container_80} from './styled/containers/Container'

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
