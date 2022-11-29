import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../modules/logging";
import { KAKAO_AUTH_URL } from "../../api/Login";

const HeaderRight = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogined = useSelector((state) => state.logging);

  const logoutHandler = () => {
    dispatch(doLogout());
    navigate("/");
  };

  const goToKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <HeaderRightDiv>
      {isLogined[0] ? (
        <div className="logined-header">
          <Link to={"/mypage"} className="login-button">
            MyPage
          </Link>
          <button className="logout-button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={goToKakaoLogin}>Login</button>
      )}
    </HeaderRightDiv>
  );
};

const HeaderRightDiv = styled.div`
  width: fit-content;
  margin: auto 0;

  .logined-header {
    font-size: 1rem;

    .logout-button {
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }

  .login-button {
    display: inline-block;
    font-size: 1rem;
  }
`;

export default HeaderRight;
