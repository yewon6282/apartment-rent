import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { cancelBookmark, doBookmark } from "../../modules/bookmarking";
import { useNavigate } from "react-router-dom";

const MainList = (props) => {
  const isLogined = useSelector((state) => state.logging);
  const bookmarkList = useSelector((state) => state.bookmarking);
  const eachIdBookmarkList = bookmarkList.bookmarkInfo.filter((el) => el[0] === isLogined[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findIndex = (month, day, apartment, floor) => {
    for (let i = 0; i < eachIdBookmarkList.length; i++) {
      if (eachIdBookmarkList[i][1] === month) {
        if (eachIdBookmarkList[i][2] === day) {
          if (eachIdBookmarkList[i][3] === apartment) {
            if (eachIdBookmarkList[i][4] === floor) {
              return true;
            }
          }
        }
      }
    }
  };

  const doBookmarking = (id, month, day, apartment, floor) => {
    dispatch(doBookmark(id, month, day, apartment, floor));
  };

  const cancelBookmarking = (id, month, day, apartment, floor) => {
    dispatch(cancelBookmark(id, month, day, apartment, floor));
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <MainListDiv>
      {props.apartData !== null ? (
        <ul>
          {props.newDataList.map((item, key) => (
            <li className="apart-list" key={key}>
              <div className="apart-data-list">
                <p>{item.건축년도}</p>
                <p>
                  {item.년}.{item.월}.{item.일}
                </p>
                <p>{item.법정동}</p>
                <p>{item.아파트}</p>
                <p>{item.지번}</p>
                <p>{item.지역코드}</p>
                <p>{item.보증금액}</p>
                <p>{item.월세금액}</p>
                <p>
                  {item.전용면적}({parseInt(item.전용면적 * 0.3025)}평)
                </p>
                <p>{item.층}</p>
              </div>
              <div className="data-bookmark">
                {isLogined[0] && findIndex(item.월, item.일, item.아파트, item.층) 
                  ? <FaBookmark className="bookmark-icon" onClick={() => cancelBookmarking(isLogined[0], item.월, item.일, item.아파트, item.층)} /> 
                  : <FaRegBookmark className="bookmark-icon" onClick={isLogined[0] ? () => doBookmarking(isLogined[0], item.월, item.일, item.아파트, item.층) : goToLogin} />}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1>검색 결과가 존재하지 않습니다.</h1>
      )}
    </MainListDiv>
  );
};

const MainListDiv = styled.div`
  width: inherit;
  margin: 0 auto;

  ul {
    width: inherit;

    .apart-list {
      width: calc(inherit - 2rem);
      margin: 1rem 0;
      padding: 1rem;
      background-color: #d6e6f5;
      border-radius: 1rem;
      display: flex;
      flex-direction: row;

      .apart-data-list {
        width: inherit;
        flex-grow: 19;
        display: flex;
        flex-direction: row;

        p {
          margin-top: 0.2rem;
          width: calc(13.14% - 2rem);
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .data-bookmark {
        flex-grow: 1;
        text-align: center;
      }
    }
  }

  & h1 {
    text-align: center;
    margin: 15rem auto;
    color: #d1d1d1;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export default MainList;
