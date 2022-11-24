import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "./components/Atom/Loading";
import Header from "./components/Template/Header";
import Main from "./components/Template/Main";
import "./css/initialization.css";

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
  console.log(apartData);
  
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
      <Header />
      <Main apartData={apartData} />
    </AppDiv>
  );
}

const AppDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
