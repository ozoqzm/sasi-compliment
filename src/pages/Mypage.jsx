import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: white;
  border: 1px solid gray;
`;

const ContentBox = styled.div`
  position: relative;
  top: 6%;
  margin: auto;
`;

const Back = styled.div`
  position: relative;
  margin-left: 15px;
`;

const ProfileImg = styled.div`
  position: relative;
  margin-left: 100px;
`;

const Username = styled.div`
  position: relative;
  width: 80px;
  height: 27px;
  left: 150px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */

  color: #3b6ae3;
`;

const Useremail = styled.div`
  position: relative;
  position: absolute;
  width: 162px;
  height: 17px;
  left: calc(50% - 162px / 2);
  margin-top: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #3b6ae3;
`;

const CoinBox = styled.div`
  position: relative;
  margin-top: 55px;
  margin-left: 15px;
`;

const CoinText = styled.div`
  position: relative;
  width: 54px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #3b6ae3;
  top: -81px;
  left: 80px;
`;

const CoinUse = styled.div`
  position: relative;
  top: -67px;
  left: 40px;
`;

const Rewritebox = styled.div`
  position: relative;
  margin-top: -30px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const Urlbox = styled.div`
  position: relative;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const Logoutbox = styled.div`
  position: relative;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const Profile = () => {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate("/Profile"); // '/Profile'로 수정
  };

  return (
    <Container>
      <ContentBox>
        <Back>
          <img src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="Back" />
        </Back>
        <ProfileImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.svg`}
            alt="Profile"
          />
        </ProfileImg>
        <Username>주연진</Username>
        <Useremail>yeonjin0822@gmail.com</Useremail>
        <CoinBox>
          <img src={`${process.env.PUBLIC_URL}/images/coinbox.svg`} />
        </CoinBox>
        <CoinText>200P</CoinText>
        <CoinUse>
          <img src={`${process.env.PUBLIC_URL}/images/point_use.svg`} />
        </CoinUse>
        <Rewritebox>
          <img
            src={`${process.env.PUBLIC_URL}/images/bluebox_rewrite.svg`}
            alt="Rewrite Box"
            onClick={onClickImg}
          />
        </Rewritebox>
        <Urlbox>
          <img
            src={`${process.env.PUBLIC_URL}/images/bluebox_url.svg`}
            alt="URL Box"
          />
        </Urlbox>
        <Logoutbox>
          <img
            src={`${process.env.PUBLIC_URL}/images/whitebox.svg`}
            alt="Logout Box"
          />
        </Logoutbox>
      </ContentBox>
    </Container>
  );
};

export default Profile;
