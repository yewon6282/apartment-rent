import React from "react";
import styled from "styled-components";
import HeaderLeft from "../Organism/HeaderLeft";
import HeaderRight from "../Organism/HeaderRight";

const Header = () => {
  return (
    <HeaderDiv>
      <div className="header">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: inherit;
  height: 3rem;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);

  .header {
    width: 68.25rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Header;
