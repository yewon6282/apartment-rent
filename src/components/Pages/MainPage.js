import React from "react";
import styled from "styled-components";
import Header from "../Template/Header";
import Main from "../Template/Main";

const MainPage = (props) => {
  return (
    <MainPageDiv>
      <Header />
      <Main apartData={props.apartData} />
    </MainPageDiv>
  );
};

const MainPageDiv = styled.div`
  width: inherit;
  height: inherit;
`;

export default MainPage;
