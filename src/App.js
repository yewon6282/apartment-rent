import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./css/initialization.css";
import Loading from "./components/Atom/Loading";
import MainPage from "./components/Pages/MainPage";
import LoginPage from "./components/Pages/LoginPage";
import MyPagePage from "./components/Pages/MyPagePage";

const APARTURL = "/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent";
// const CODEURL = "https://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList";

function App() {
  const filteringData = useSelector((state) => state.filtering);
  const [apartData, setApartData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apartmentData = async () => {
    try {
      setError(null);
      setApartData(null);
      setLoading(true);

      const response = await axios.get(APARTURL, {
        params: {
          serviceKey: process.env.REACT_APP_APARTMENT_API_KEY,
          LAWD_CD: filteringData.regionCode,
          DEAL_YMD: filteringData.contractDate,
        },
      });

      setApartData(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  // console.log(apartData);

  // const [codeData, setCodeData] = useState(null);

  // const regionCodeData = async () => {
  //   try {
  //     setCodeData(null);

  //     const response = await axios.get(CODEURL, {
  //       params: {
  //         serviceKey: process.env.REACT_APP_CODE_API_KEY,
  //         type : 'xml',
  //         pageNo : 1,
  //         numOfRows : 3,
  //         locatadd_nm : '서울특별시 종로구'
  //       },
  //     });

  //     setCodeData(response.data);
  //   } catch (e) {}
  // };

  useEffect(() => {
    apartmentData();
    // regionCodeData();
  }, [filteringData]);

  if (loading && !apartData) return <Loading />;
  if (error) return <div>Error...</div>;
  if (!apartData) return null;

  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage apartData={apartData} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPagePage apartData={apartData} />} />
        </Routes>
      </BrowserRouter>
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
