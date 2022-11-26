import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { rigionCodeFiltering, contractDateFiltering } from "../../modules/filtering";
import { HiOutlineSearch } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";

const MainFilter = (props) => {
  const dispatch = useDispatch();
  const [searchFilterValue, setSearchFilterValue] = useState("areaCode");
  const [searchInputValue, setSearchInputValue] = useState();

  const InputValueChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  }
  
  const searchValueChangeHandler = (e) => {
    setSearchFilterValue(e.target.value);
  };

  const doFiltering = () => {
    if (searchFilterValue === "areaCode") {
      dispatch(rigionCodeFiltering(searchInputValue));
    } else if (searchFilterValue === "contractYearMonth") {
      dispatch(contractDateFiltering(searchInputValue));
    }
  }

  const selecting = (e) => {
    props.setSelectPriority(e.target.value);
  };

  return (
    <MainFilterDiv>
      <div className="search-input">
        <select defaultValue="areaCode" className="search-filter" onChange={searchValueChangeHandler}>
          <option value="areaCode">지역코드</option>
          <option value="contractYearMonth">계약년월</option>
        </select>
        <input placeholder="검색어를 입력하세요" onChange={InputValueChangeHandler} />
        <HiOutlineSearch className="search-icon" onClick={doFiltering}/>
      </div>
      <div className="select-priority-wrap">
        <select defaultValue="default" className="select-priority" onChange={selecting}>
          <option value="default" disabled>
            정렬기준
          </option>
          <option value="constructionYear">최근 건축년도 순</option>
          <option value="deposit">낮은 보증금 순</option>
          <option value="monthly">낮은 월세 순</option>
          <option value="area">넓은 면적 순</option>
          <option value="floor">높은 층 순</option>
        </select>
        <BsChevronDown className="arrow-down-icon" />
      </div>
    </MainFilterDiv>
  );
};

const MainFilterDiv = styled.div`
  margin: 1rem auto;
  width: 66.25rem;
  display: flex;
  flex-direction: row;

  .search-input {
    position: relative;
    flex-grow: 10;

    .search-filter {
      position: absolute;
      top: 0.2rem;
      left: 1.4rem;
      padding: 0.85rem;
      font-size: 1rem;
      border: none;
      outline: 0;

      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
    }

    input {
      width: -webkit-fill-available;
      margin-right: 1rem;
      padding: 1rem 0 1rem 10rem;
      font-size: 1rem;
      border: 1px solid rgb(181, 215, 247);
      border-radius: 1rem;
    }

    .search-icon {
      position: absolute;
      top: 1.1rem;
      left: 48rem;
    }
  }

  .select-priority-wrap {
    position: relative;
    flex-grow: 2;

    .select-priority {
      width: -webkit-fill-available;
      padding: 1rem;
      font-size: 1rem;
      border: 1px solid rgb(181, 215, 247);
      border-radius: 1rem;

      -webkit-appearance: none; /* for chrome */
      -moz-appearance: none; /*for firefox*/
      appearance: none;
    }

    .arrow-down-icon {
      position: absolute;
      top: 1.1rem;
      left: 12rem;
    }
  }
`;

export default MainFilter;