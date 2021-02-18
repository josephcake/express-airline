import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './navigation/Nav'

import {Theme} from './styled/theme/Theme'
import {Input} from './styled/components/Input'
import {OuterDiv} from './styled/containers/OuterDiv'


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Nav/>
        <OuterDiv>
          <Input/>
        </OuterDiv>
      </div>
    </ThemeProvider>
  );
}

export default App;
