import React from "react";
import styled from "styled-components";

const MainListTitle = () => {
  return (
    <MainListTitleDiv>
      <ul>
        <li>
          <p>건축년도</p>
        </li>
        <li>
          <p>계약날짜</p>
        </li>
        <li>
          <p>읍·면·동</p>
        </li>
        <li>
          <p>아파트</p>
        </li>
        <li>
          <p>지번</p>
        </li>
        <li>
          <p>지역코드</p>
        </li>
        <li>
          <p>보증금</p>
        </li>
        <li>
          <p>월세</p>
        </li>
        <li>
          <p>전용면적</p>
        </li>
        <li>
          <p>층</p>
        </li>
      </ul>
      <div className="bookmark-part">북마크</div>
    </MainListTitleDiv>
  );
};

const MainListTitleDiv = styled.div`
  width: 66.25rem;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: #b5dbff;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;

  ul {
    flex-grow: 10;
    height: 3rem;

    li {
      width: calc(13.14% - 2rem);
      height: inherit;
      float: left;
      display: flex;
      align-items: center;

      p {
        
        margin: 0 auto;
      }
    }
  }

  .bookmark-part {
    margin: auto 0;
    text-align: center;
  }
`;

export default MainListTitle;
