import React from "react";
import Header from "../Template/Header";
import MyPage from "../Template/MyPage";

const MyPagePage = (props) => {
  return (
    <>
      <Header />
      <MyPage apartData={props.apartData} />
    </>
  );
};

export default MyPagePage;
