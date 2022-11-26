import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../modules/logging";

const HeaderRight = () => {
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.logging);

  const logoutHandler = () => {
    dispatch(doLogout());
  };
  return (
    <HeaderRightDiv>
      {isLogined[0] ? (
        <div className="logined-header">
          <Link to={"/mypage"} className="login-button">
            MyPage
          </Link>
          <button className="logout-button" onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <Link to={"/login"} className="login-button">
          Login
        </Link>
      )}
    </HeaderRightDiv>
  );
};

const HeaderRightDiv = styled.div`
  width: fit-content;

  .logined-header {
    font-size: 1rem;
    
    .logout-button {
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }

  .login-button {
    display: inline-block;
    padding: 1rem 0;
    font-size: 1rem;
  }
`;

export default HeaderRight;
