import React from "react";
import Header from "../Template/Header";
import Main from "../Template/Main";

const MainPage = (props) => {
  return (
    <>
      <Header />
      <Main apartData={props.apartData} />
    </>
  );
};

export default MainPage;
