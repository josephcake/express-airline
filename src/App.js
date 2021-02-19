import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './top-navigation/Nav'
import SideNav from './side-navigation/SideNav'

import {Theme} from './styled/theme/Theme'
import {Input} from './styled/components/Input'
import {OuterDiv} from './styled/containers/OuterDiv'


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Nav/>        
        <SideNav/>
      </div>
    </ThemeProvider>
  );
}

export default App;
