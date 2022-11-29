import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Map from "../../api/Map";
import MainCard from "../Organism/MainCard";

const Main = (props) => {
  const [newDataList, setNewDataList] = useState([]);
  const [selectPriority, setSelectPriority] = useState();

  useEffect(() => {
    if (props.apartData !== null) {
      if (selectPriority === "constructionYear") {
        let compareList = [...props.apartData];
        let comparing = (key) => (a, b) => {
          return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
        };
        compareList.sort(comparing("건축년도"));
        setNewDataList(compareList);
      } else if (selectPriority === "deposit") {
        let compareList = [...props.apartData];
        let comparing = (key) => (a, b) => {
          return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
        };
        compareList.sort(comparing("보증금액"));
        setNewDataList(compareList);
      } else if (selectPriority === "monthly") {
        let compareList = [...props.apartData];
        let comparing = (key) => (a, b) => {
          return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
        };
        compareList.sort(comparing("월세금액"));
        setNewDataList(compareList);
      } else if (selectPriority === "area") {
        let compareList = [...props.apartData];
        let comparing = (key) => (a, b) => {
          return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
        };
        compareList.sort(comparing("전용면적"));
        setNewDataList(compareList);
      } else if (selectPriority === "floor") {
        let compareList = [...props.apartData];
        let comparing = (key) => (a, b) => {
          return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
        };
        compareList.sort(comparing("층"));
        setNewDataList(compareList);
      } else setNewDataList([...props.apartData]);
    }
  }, [props.apartData, selectPriority]);

  return (
    <MainDiv>
      <Map />
      <MainCard apartData={props.apartData} newDataList={newDataList} setSelectPriority={setSelectPriority}/>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  position: relative;
  top: 3rem;
  width: inherit;
  height: inherit;
`;

export default Main;
