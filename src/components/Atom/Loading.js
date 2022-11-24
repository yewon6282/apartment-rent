import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <LoadingDiv>Loading</LoadingDiv>;
};

const LoadingDiv = styled.div`
  text-align: center;
  margin: 15rem 0;
  color: #adadad;
  font-size: 2rem;
  font-weight: 400;
`;

export default Loading;
