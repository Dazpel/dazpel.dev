import React from "react";
import logo from '../images/icon.svg'
import styled from "styled-components/macro";

const LogoImg = styled.div`
  position: relative;
  background-image: url(${logo});
  width: 34px;
  height: 32px;
  background-repeat: no-repeat;
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;
