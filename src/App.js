import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'

import {Theme} from './styled/theme/Theme'
import {Input} from './styled/components/Input'
import {PageContainer} from './styled/containers/Container'

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
        <PageContainer>
          <h1>HERO</h1>
          <h1>FLIGHT CONTROLLER</h1>
          <h1>ADVISORY</h1>
          <h1>SUGGESTIONS</h1>
        </PageContainer>
      </AppDiv>
    </ThemeProvider>
  );
}

export default App;
