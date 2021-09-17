import './fonts.css';
import styled, { css } from "styled-components";
import Colors from "./Colors";

const defaultFont = css`
  font-style: normal;
  font-weight: normal;
  font-family: "IBM Plex Sans";
  color: ${Colors.Grey1};
`;

const StrongStyle = css`
  font-weight: 500;
  color: ${Colors.Coal};
`;

const Small = styled.p`
  ${defaultFont};
  font-size: 12px;
  line-height: 1.4em;
  letter-spacing: 0.01em;
`;

const SmallStrong = styled.p`
  ${Small};
  ${StrongStyle};
`;

const Normal = styled.p`
  ${defaultFont};
  font-size: 14px;
  line-height: 1.4em;
`;

const NormalStrong = styled.p`
  ${Normal};
  ${StrongStyle};
`;

const Large = styled.p`
  ${defaultFont};
  font-size: 16px;
  line-height: 25px;
`;

const LargeStrong = styled.p`
  ${Large};
  ${StrongStyle};
`;

const FontStyles = {
  defaultFont,
  Small,
  SmallStrong,
  Normal,
  NormalStrong,
  Large,
  LargeStrong,
  StrongStyle
};

export default FontStyles;