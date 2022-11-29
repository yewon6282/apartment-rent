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
                <p>
                  <span>건축년도</span> {item.건축년도}
                </p>
                <p>
                  <span>계약날짜</span>
                  {item.년}.{item.월}.{item.일}
                </p>
                <p>
                  <span>주소</span>
                  {item.법정동} {item.아파트} {item.지번} {item.지역코드}
                </p>
                <p>
                  <span>보증금 / 월세</span>
                  {item.보증금액} / {item.월세금액}
                </p>
                <p>
                  <span>전용면적(평) / 층</span>
                  {item.전용면적}({parseInt(item.전용면적 * 0.3025)}평) / {item.층}층
                </p>
              </div>
              <div className="data-bookmark">
                {isLogined[0] && findIndex(item.월, item.일, item.아파트, item.층) ? <FaBookmark className="bookmark-icon" onClick={() => cancelBookmarking(isLogined[0], item.월, item.일, item.아파트, item.층)} /> : <FaRegBookmark className="bookmark-icon" onClick={isLogined[0] ? () => doBookmarking(isLogined[0], item.월, item.일, item.아파트, item.층) : goToLogin} />}
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
  height: inherit;
  margin: 0 auto;

  ul {
    margin-top: 1rem;
    width: inherit;
    height: inherit;
    overflow: scroll;

    .apart-list {
      /* width: 90%; */
      margin: 1rem;
      padding: 1rem;
      background-color: #d6e6f5;
      border-radius: 1rem;
      display: flex;
      flex-direction: row;

      .apart-data-list {
        width: inherit;
        flex-grow: 19;

        p {
          margin-top: 0.2rem;
          width: inherit;
          font-size: 0.9rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          span {
            font-size: 1rem;
            font-weight: 400;
            margin-right: 0.2rem;
          }
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
