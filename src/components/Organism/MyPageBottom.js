import React from "react";
import styled from "styled-components";
import { FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cancelBookmark } from "../../modules/bookmarking";

const MyPageBottom = (props) => {
  const isLogined = useSelector((state) => state.logging);
  const bookmarkList = useSelector((state) => state.bookmarking);
  const eachIdBookmarkList = bookmarkList.bookmarkInfo.filter((el) => el[0] === isLogined[0]);
  const dispatch = useDispatch();
  const cancelBookmarking = (id, month, day, apartment, floor) => {
    dispatch(cancelBookmark(id, month, day, apartment, floor));
  };

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

  return (
    <MyPageBottomDiv>
      <div className="my-prefer-list">
        <h2>내가 북마크한 목록</h2>
        {eachIdBookmarkList.length !== 0 ? (
          <ul>
            {props.apartData.map((item, key) => (
              <div key={key}>
                {findIndex(item.월, item.일, item.아파트, item.층) && (
                  <li className="apart-list">
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
                      <FaBookmark className="bookmark-icon" onClick={() => cancelBookmarking(isLogined[0], item.월, item.일, item.아파트, item.층)} />
                    </div>
                  </li>
                )}
              </div>
            ))}
          </ul>
        ) : (
          <h1>아직 북마크한 정보가 없습니다.</h1>
        )}
      </div>
    </MyPageBottomDiv>
  );
};

const MyPageBottomDiv = styled.div`
  width: inherit;

  .my-prefer-list {
    width: 101rem;
    margin: 0 auto;
    padding: 1rem;

    & h2 {
      padding-top: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
    }

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
  }
`;

export default MyPageBottom;
