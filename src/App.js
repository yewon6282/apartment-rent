import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./css/initialization.css";
import MainPage from "./components/Pages/MainPage";
import LoginPage from "./components/Pages/LoginPage";
import MyPagePage from "./components/Pages/MyPagePage";
import { regionCodeFiltering } from "./modules/realEstateFiltering";
import Profile from "./json/Profile.json";
import { regionNameFiltering } from "./modules/regionFiltering";

const APARTURL = "/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent";
const CODEURL = "https://apis.data.go.kr/1741000/StanReginCd/getStanReginCdList";

function App() {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.logging);
  const realEstateData = useSelector((state) => state.realEstateFiltering);
  const regionData = useSelector((state) => state.regionFiltering);
  const [apartData, setApartData] = useState(null);
  const [codeData, setCodeData] = useState(null);

  const regionCodeData = async () => {
    try {
      setCodeData(null);

      const response = await axios.get(CODEURL, {
        params: {
          serviceKey: process.env.REACT_APP_CODE_API_KEY,
          type: "json",
          pageNo: 1,
          numOfRows: 10,
          locatadd_nm: regionData.regionName,
        },
      });

      setCodeData(response.data.StanReginCd[1].row[0].region_cd);
    } catch (e) {}
  };

  useEffect(() => {
    regionCodeData();
  }, [regionData]);

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

  useEffect(() => {
    apartmentData();
  }, [realEstateData]);

  useEffect(() => {
    if (codeData > 0) {
      dispatch(regionCodeFiltering((codeData / 100000).toString()));
    }
  }, [codeData, dispatch, isLogined]);

  return (
    <AppDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage apartData={apartData} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPagePage />} />
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
