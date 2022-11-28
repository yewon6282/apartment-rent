import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

const APARTURL = "/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent";

const ApartmentJeonseMonthly = () => {
  const realEstateData = useSelector((state) => state.realEstateFiltering);
  const [apartData, setApartData] = useState(null);
  const [codeData, setCodeData] = useState(null);

  const apartmentData = async () => {
    try {
      setApartData(null);

      const response = await axios.get(APARTURL, {
        params: {
          serviceKey: process.env.REACT_APP_APARTMENT_API_KEY,
          LAWD_CD: realEstateData.regionCode,
          DEAL_YMD: realEstateData.contractDate,
        },
      });

      setApartData(response.data.response.body.items.item);
    } catch (e) {
      // alert(e);
    }
  };
  console.log(apartData);

  useEffect(() => {
    apartmentData();
  }, []);
  return <ApartmentJeonseMonthlyDiv>
    {apartData !== null ? (
        <ul>
          {/* {props.newDataList.map((item, key) => (
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
          ))} */}
        </ul>
      ) : (
        <h1>검색 결과가 존재하지 않습니다.</h1>
      )}
  </ApartmentJeonseMonthlyDiv>;
};

const ApartmentJeonseMonthlyDiv = styled.div`
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

export default ApartmentJeonseMonthly;
