import './App.css';
import axios from 'axios'
import Fonts from './styling/FontStyles'
import styled from 'styled-components';
import StaccIcon from './styling/StaccLogo';

import { useState } from 'react'
const getUrl = (org) => `https://data.brreg.no/enhetsregisteret/api/enheter/${org}`

const StrongLabel = styled.label`
  ${Fonts.defaultFont};
  font-size: 18px;
`;

function App() {
  const [organization, setOrganization] = useState()
  const [currentOrgNo, setOrgNo] = useState("917082391")

  const onSubmit = (event) => {
    event.preventDefault();
    axios.get(getUrl(currentOrgNo)).then(d => setOrganization(d.data)).catch((err) => console.error(err));
  }

  const orgData = organization ?
    <>
      <Fonts.Normal>Navn: {organization?.navn}</Fonts.Normal>
      <Fonts.Normal>Land: {organization?.forretningsadresse?.land}</Fonts.Normal>
      <Fonts.Normal>Org type: {organization?.organisasjonsform?.kode}</Fonts.Normal>
      <Fonts.Normal>Stiftet: {organization?.stiftelsesdato ? new Date(Date.parse(organization?.stiftelsesdato)).toLocaleDateString("no-NO") : ""}</Fonts.Normal>
      <Fonts.Normal>Ansatte: {organization?.antallAnsatte}</Fonts.Normal>
      <Fonts.Small style={{ fontSize: '12px' }}>{JSON.stringify(organization, null, 2)}</Fonts.Small>
    </>
    :
    <></>

  return (
    <div className="App">
      <header className="App-header">
        <StaccIcon />
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: "5px" }}>
            <StrongLabel>
              Stacc organisasjonssøk:
            </StrongLabel>
          </div>
          <input type='text' placeholder="Search..." value={currentOrgNo} onChange={e => setOrgNo(e.target.value.replace(/\D/g, ''))} />
          <input type="submit" value='Submit' />
        </form>
        {orgData}
      </header>
    </div>
  );
}

export default App;
