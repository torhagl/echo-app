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

const SmallStrong = styled.p`
  ${Small};
  font-weight: 500;
  color: ${Colors.Coal};
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

const NormalStrong = styled.p`
  ${Normal};
  font-weight: 500;
  color: ${Colors.Coal};
`;

const Large = styled.p`
  font-style: normal;
  font-weight: normal;
  font-family: "IBM Plex Sans";
  color: ${Colors.Grey1};

  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,700");
  font-size: 16px;
  line-height: 25px;
`;

const LargeStrong = styled.p`
  ${Large};
  font-weight: 500;
  color: ${Colors.Coal};
`;

const FontStyles = {
  Small,
  SmallStrong,
  Normal,
  NormalStrong,
  Large,
  LargeStrong,
};

export default FontStyles;
