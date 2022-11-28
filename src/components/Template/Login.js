import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Profile from "../../json/Profile.json";
import { doLogin } from "../../modules/logging";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [emailValue, setEmailValue] = useState();
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordValue, setPasswordValue] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const emailOnChangeHandler = (event) => {
    setEmailIsValid(true);
    setEmailValue(event.target.value);
  };

  const passwordOnChangeHandler = (event) => {
    setPasswordIsValid(true);
    setPasswordValue(event.target.value);
  };

  const loginSubmit = (event) => {
    event.preventDefault();

    const ProfileHasId = Profile.Profiles.filter((el) => el.id === emailValue);
    if (ProfileHasId.length > 0) {
      if (ProfileHasId[0].password === passwordValue) {
        dispatch(doLogin(emailValue, passwordValue));
        navigate("/");
      } else {
        setPasswordIsValid(false);
      }
    } else {
      setEmailIsValid(false);
    }
  };

  return (
    <LoginDiv>
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={loginSubmit}>
          <input className="email-input" onChange={emailOnChangeHandler} ref={inputRef} type="text" placeholder="이메일" />
          {!emailIsValid && <small>존재하지 않는 이메일입니다.</small>}
          <input className="password-input" onChange={passwordOnChangeHandler} type="password" placeholder="비밀번호" />
          {!passwordIsValid && <small>비밀번호가 옳지 않습니다.</small>}
          <input className="submit-input" type="submit" value="로그인하기" />
        </form>
      </div>
    </LoginDiv>
  );
};

const LoginDiv = styled.div`
  position: relative;
  top: 3rem;
  width: inherit;
  height: inherit;

  .login-form {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    background-color: #d6e6f5;
    border-radius: 2rem;
    padding: 1rem;

    h1 {
      margin: 1rem 0;
      font-size: 1.5rem;
      text-align: center;
    }

    form {
      width: 100%;

      .email-input, .password-input {
        margin: 0.5rem 0;
        padding: 1rem;
        width: 90%;
        border-radius: 1rem;
      }

      .submit-input {
        margin: 0.5rem 0;
        padding: 1rem 0;
        width: inherit;
        border-radius: 1rem;
      }

      .email-input:focus, .password-input:focus {
        outline: none;
      }

      small {
        margin-left: 0.5rem;
        font-size: 0.8rem;
        color: red;
      }
    }
  }
`;
export default Login;
