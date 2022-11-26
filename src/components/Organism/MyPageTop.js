import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Profile from "../../json/Profile.json";

const MyPageTop = () => {
  const isLogined = useSelector((state) => state.logging);
  const memberProfile = Profile.Profiles.find((el) => el.id === isLogined[0]);

  return (
    <MyPageTopDiv>
      <div className="mypage-profile">
        <img className="profile-image" src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile" />
        <div className="my-information">
          <p>
            id <span>{memberProfile.id}</span>
          </p>
          <p>
            prefer region <span>{memberProfile.preferRegion}</span>
          </p>
        </div>
      </div>
    </MyPageTopDiv>
  );
};

const MyPageTopDiv = styled.div`
  width: inherit;
  height: 25%;

  .mypage-profile {
    width: 66.25rem;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
    background-color: aliceblue;
    display: flex;
    flex-direction: row;

    .profile-image {
      margin: auto 0;
      width: 10rem;
      height: 10rem;
      object-fit: contain;
      border: 1px solid #8dcaff;
    }

    .my-information {
      p {
        margin: 1rem;
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: 500;
        background-color: #fff;
        border-radius: 1rem;

        span {
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }
`;

export default MyPageTop;
