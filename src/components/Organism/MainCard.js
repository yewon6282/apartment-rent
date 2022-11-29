import React from "react";
import styled from "styled-components";
import MainFilter from "../Molecule/MainFilter";
import MainList from "../Molecule/MainList";

const MainCard = (props) => {
  return (
    <MainCardDiv>
      <div className="main-card">
        <MainFilter setSelectPriority={props.setSelectPriority}/>
        <MainList apartData={props.apartData} newDataList={props.newDataList}/>
      </div>
    </MainCardDiv>
  );
};

const MainCardDiv = styled.div`
  z-index: 3;
  position: relative;
  top: 2.5rem;
  left: 2rem;
  width: 25%;
  height: inherit;

  .main-card {
    width: 100%;
    height: 85%;
    background-color: #fff;
    border-radius: 1rem;
  }
`;

export default MainCard;
