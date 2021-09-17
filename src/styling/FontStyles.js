import styled from "styled-components";

import Colors from "./Colors";

const Small = styled.p`
  font-style: normal;
  font-weight: normal;
  font-family: "IBM Plex Sans";
  color: ${Colors.Grey1};

  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,700");
  font-size: 12px;
  line-height: 1.4em;
  letter-spacing: 0.01em;
`;

const Normal = styled.p`
  font-style: normal;
  font-weight: normal;
  font-family: "IBM Plex Sans";
  color: ${Colors.Grey1};

  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,700");
  font-size: 14px;
  line-height: 1.4em;
`;
const FontStyles = {
  Small,
  Normal,
};

export default FontStyles;
