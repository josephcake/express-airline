import './App.css';
import styled from 'styled-components'

const Input = styled.input`
  font-family: sans-serif;
  font-size: 20px;
  border:none;
  border-radius:5px;
  outline:none;  
`
function App() {
  return (
    <div className="App">
      <div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
