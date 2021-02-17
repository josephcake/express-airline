import './App.css';
import styled, {ThemeProvider} from 'styled-components'
import {Background} from './styled/theme/Background'
import {Input} from './styled/components/Input'


function App() {
  return (
    <ThemeProvider theme={Background}>
      <div className="App">
        <div>
          <Input/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
