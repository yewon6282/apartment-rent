import React from "react";
import styled from "styled-components";
import { HiOutlineSearch } from "react-icons/hi";

const Main = (props) => {
  return (
    <MainDiv>
      <div className="filter-apart-list">
        <input placeholder="검색어를 입력하세요" />
        <HiOutlineSearch className="search-icon" />
      </div>
      <ul className="filter-title">
        <li>
          <span>건축년도</span>
        </li>
        <li>
          <span>계약날짜</span>
        </li>
        <li>
          <span>읍·면·동</span>
        </li>
        <li>
          <span>아파트</span>
        </li>
        <li>
          <span>지번</span>
        </li>
        <li>
          <span>지역코드</span>
        </li>
        <li>
          <span>보증금</span>
        </li>
        <li>
          <span>월세</span>
        </li>
        <li>
          <span>전용면적</span>
        </li>
        <li>
          <span>층</span>
        </li>
      </ul>
      <ul>
        {props.data.response.body.items.item.map((item, key) => (
          <li className="apart-list" key={key}>
            <span>{item.건축년도}</span>

            <span>{item.년}</span>
            <span>{item.월}</span>
            <span>{item.일}</span>

            <span>{item.법정동}</span>
            <span>{item.아파트}</span>
            <span>{item.지번}</span>
            <span>{item.지역코드}</span>

            <span>{item.보증금액}</span>
            <span>{item.월}</span>

            <span>{item.전용면적}</span>
            <span>{item.층}</span>
          </li>
        ))}
      </ul>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  position: relative;
  top: 3rem;
  width: inherit;

  .filter-apart-list {
    position: relative;
    margin: 1rem auto;
    width: 66.25rem;

    input {
      margin: 0 auto;
      width: 90%;
      padding: 1rem;
      font-size: 1rem;
      border: 1px solid rgb(181, 215, 247);
      border-radius: 1rem;
      display: flex;
    }

    .search-icon {
      position: absolute;
      top: 1.1rem;
      left: 61.75rem;
    }
  }

  .filter-title {
    width: 66.25rem;
    height: 3rem;
    margin: 0 auto;
    list-style: none;
    /* background-color: rgb(214, 230, 245);
    border-radius: 1rem; */
    
    li {
      width: calc(10% - 2rem);
      height: inherit;
      float: left;
      text-align: center;
      
      span {
      }
    }
  }
  
  .apart-list {
    width: 66.25rem;
    margin: 1rem auto;
    padding: 1rem;
    list-style: none;
    background-color: rgb(214, 230, 245);
    border-radius: 1rem;

    span {
      padding: 1rem;
    }
  }
`;

export default Main;
