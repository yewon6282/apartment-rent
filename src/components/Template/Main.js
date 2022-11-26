import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainFilter from "../Organism/MainFilter";
import MainList from "../Organism/MainList";
import MainListTitle from "../Organism/MainListTitle";

const Main = (props) => {
  const [newDataList, setNewDataList] = useState([]);
  const [selectPriority, setSelectPriority] = useState();

  useEffect(() => {
    if (selectPriority === "constructionYear") {
      let compareList = [...props.apartData.response.body.items.item];
      let comparing = (key) => (a, b) => {
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      };
      compareList.sort(comparing("건축년도"));
      setNewDataList(compareList);
    } else if (selectPriority === "deposit") {
      let compareList = [...props.apartData.response.body.items.item];
      let comparing = (key) => (a, b) => {
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
      };
      compareList.sort(comparing("보증금액"));
      setNewDataList(compareList);
    } else if (selectPriority === "monthly") {
      let compareList = [...props.apartData.response.body.items.item];
      let comparing = (key) => (a, b) => {
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
      };
      compareList.sort(comparing("월세금액"));
      setNewDataList(compareList);
    } else if (selectPriority === "area") {
      let compareList = [...props.apartData.response.body.items.item];
      let comparing = (key) => (a, b) => {
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      };
      compareList.sort(comparing("전용면적"));
      setNewDataList(compareList);
    } else if (selectPriority === "floor") {
      let compareList = [...props.apartData.response.body.items.item];
      let comparing = (key) => (a, b) => {
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      };
      compareList.sort(comparing("층"));
      setNewDataList(compareList);
    } else setNewDataList([...props.apartData.response.body.items.item]);
  }, [selectPriority]);

  return (
    <MainDiv>
      <MainFilter setSelectPriority={setSelectPriority} />
      <MainListTitle />
      <MainList apartData={props.apartData} newDataList={newDataList} />
    </MainDiv>
  );
};

const MainDiv = styled.div`
  position: relative;
  top: 3rem;
  width: inherit;
`;

export default Main;
