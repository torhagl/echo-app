import './App.css';
import axios from 'axios'
import Fonts from './styling/FontStyles'
import styled from 'styled-components'
import StaccIcon from './styling/StaccLogo';

import { useState } from 'react'
const getUrl = (org) => `https://data.brreg.no/enhetsregisteret/api/enheter/${org}`

const StrongLabel = styled.label`
  ${Fonts.defaultFont};
  font-size: 18px;
`

function App() {
  const [data, setData] = useState()
  const [currentOrg, setOrg] = useState("917082391")

  const onSubmit = (event) => {
    event.preventDefault();
    axios.get(getUrl(currentOrg)).then(d => setData(d.data)).catch((err) => console.error(err));
  }
  return (
    <div className="App">
      <header className="App-header">
        <StaccIcon/>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: "5px" }}>
            <StrongLabel>
              Stacc organisasjonssøk:
            </StrongLabel>
          </div>
          <input type='text' placeholder="Search..." value={currentOrg} onChange={e => setOrg(e.target.value.replace(/\D/g, ''))} />
          <input type="submit" value='Submit' />
        </form>
        <Fonts.Large>Navn: {data?.navn}</Fonts.Large>
        <Fonts.Small style={{fontSize: '12px'}}>{JSON.stringify(data, null, 2)}</Fonts.Small>
      </header>
    </div>
  );
}

export default App;
