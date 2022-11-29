import React from "react";
import styled from "styled-components";
import MyPageBottom from "../Organism/MyPageBottom";
import MyPageTop from "../Organism/MyPageTop";

const MyPage = (props) => {
  return (
    <MyPageDiv>
      <MyPageTop />
      <MyPageBottom apartData={props.apartData} />
    </MyPageDiv>
  );
};

const MyPageDiv = styled.div`
  position: relative;
  top: 3rem;
`;

export default MyPage;
