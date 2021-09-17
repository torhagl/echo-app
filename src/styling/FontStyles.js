import styled from "styled-components";
import Colors from "./Colors";
import './fonts.css';

const Small = styled.p`
  font-style: normal;
  font-weight: normal;
  font-family: "IBM Plex Sans";
  color: ${Colors.Grey1};

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

  font-size: 16px;
  line-height: 25px;
`;

const LargeStrong = styled.p`
  ${Large};
  font-weight: 500;
  color: ${Colors.Coal};
`;

const StrongLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-family: "IBM Plex Sans";
  color: ${Colors.Grey1};
  font-size: 18px;
`

const FontStyles = {
  Small,
  SmallStrong,
  Normal,
  NormalStrong,
  Large,
  LargeStrong,
  StrongLabel,
};

export default FontStyles;
