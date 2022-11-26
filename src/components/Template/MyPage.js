import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MyPageBottom from "../Organism/MyPageBottom";
import MyPageTop from "../Organism/MyPageTop";
import { useNavigate } from "react-router-dom";

const MyPage = (props) => {
  const navigate = useNavigate();
  const isLogined = useSelector((state) => state.logging);

  useEffect(() => {
    if (isLogined.length === 0) {
      navigate("/");
    }
  }, [isLogined.length, navigate]);
  return (
    <MyPageDiv>
      <MyPageTop />
      <MyPageBottom apartData={props.apartData}/>
    </MyPageDiv>
  );
};

const MyPageDiv = styled.div`
  position: relative;
  top: 3rem;
`;

export default MyPage;
