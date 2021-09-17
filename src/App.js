import './App.css';
import axios from 'axios'

import { useState } from 'react'
const getUrl = (org) => `https://data.brreg.no/enhetsregisteret/api/enheter/${org}`

function App() {

  const [data, setData] = useState({})
  const [currentOrg, setOrg] = useState("917082391")

  const onSubmit = (event) => {
    event.preventDefault();
    axios.get(getUrl(currentOrg)).then(d => setData(d.data));
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: "5px" }}>
            <label>
              Stacc organisasjonssøk:
            </label>
          </div>
          <input type='text' placeholder="Search..." value={currentOrg} onChange={e => setOrg(e.target.value)} />
          <input type="submit" value='Submit' />
        </form>
        <p>{data?.navn}</p>
        <p>{data?.organisasjonsnummer}</p>
        <p style={{ fontSize: '12px' }}>{JSON.stringify(data, null, 2)}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
