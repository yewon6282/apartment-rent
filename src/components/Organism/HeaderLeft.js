import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLeft = () => {
  return (
    <HeaderLeftDiv>
      <Link to={"/"}>
        <BsHouseDoor size={25} />
      </Link>
    </HeaderLeftDiv>
  );
};

const HeaderLeftDiv = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

export default HeaderLeft;
