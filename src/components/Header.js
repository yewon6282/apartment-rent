import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderDiv></HeaderDiv>;
};

const HeaderDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: inherit;
  height: 3rem;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

export default Header;
