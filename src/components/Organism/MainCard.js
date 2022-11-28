import React from "react";
import styled from "styled-components";
import ApartmentJeonseMonthly from "../../api/ApartmentJeonseMonthly";
import MainFilter from "../Molecule/MainFilter";
import MainList from "../Molecule/MainList";

const MainCard = (props) => {
  return (
    <MainCardDiv>
      <div className="main-card">
        <MainFilter />
        <ApartmentJeonseMonthly />
        {/* <MainList newDataList={props.newDataList}/> */}
        {/* <MainList apartData={props.apartData} newDataList={props.newDataList}/> */}
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
