import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { cancelBookmark, doBookmark } from "../../modules/bookmarking";
const MainList = (props) => {
  const bookmarkList = useSelector((state) => state.bookmarking);
  console.log(bookmarkList);
  const dispatch = useDispatch();

  const doBookmarking = (month, day, apartment) => {
    dispatch(doBookmark(month, day, apartment));
  };
  
  const cancelBookmarking = (month, day, apartment) => {
    dispatch(cancelBookmark(month, day, apartment));
  };

  return (
    <MainListDiv>
      {props.apartData.response.body.totalCount !== 0 ? (
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
                <p>{item.월}</p>
                <p>
                  {item.전용면적}({parseInt(item.전용면적 * 0.3025)}평)
                </p>
                <p>{item.층}</p>
              </div>
              <div className="data-bookmark">
                {bookmarkList.bookmarkId.includes(key)? <FaBookmark className="bookmark-icon" onClick={() => cancelBookmarking(item.월,item.일,item.아파트)}/> : <FaRegBookmark className="bookmark-icon" onClick={() => doBookmarking(item.월,item.일,item.아파트)}/>}
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
  width: 68.25rem;
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

  h1 {
    text-align: center;
    margin: 15rem 0;
    color: #d1d1d1;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export default MainList;
