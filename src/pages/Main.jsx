import React, { useState, useCallback } from "react";
import styled from "styled-components";
//import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: linear-gradient(180deg, #fff 0%, #76adff 100%);
  border: 1px solid gray;
`;
const ContentBox = styled.div`
  position: relative;
  top: 4%;
  margin: auto;
`;
// const Back = styled.div`
//   position: relative;
//   margin-left: 15px;
// `;
const TitleBox = styled.div`
  position: relative;
  width: 70px;
  height: 17px;
  left: 7px;
  background-image: url("${process.env.PUBLIC_URL}/images/gorae_title.svg");
  background-size: cover;
  display: inline-block;
`;
const UserCircle = styled.div`
  position: relative;
  left: 260px;
  width: 24px;
  height: 24px;
  background-image: url("${process.env.PUBLIC_URL}/images/usercircle.svg");
  background-size: cover;
  display: inline-block;
`;
const UserImg = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url("${process.env.PUBLIC_URL}/images/userbtn.svg");
  background-size: cover;
`;
const TextBox = styled.div`
  position: relative;
  color: #3b6ae3;
  margin-top: 20px;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextBox2 = styled.div`
  position: rleative;
  color: #3b6ae3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DropList = styled.div`
  position: relative;
  max-width: 210px;
  height: 250px;
  margin: auto;
  top: 35px;
`;
const Whale = styled.div`
  position: rleative;
  margin: auto;
  margin-top: -30px;
  width: 310px;
  height: 310px;
  background: url("${process.env.PUBLIC_URL}/images/gorae.svg");
  background-size: cover;
`;
const GoButton = styled.button`
  position: rleative;
  margin: auto;
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 345px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #1647c3;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;
const MakeButton = styled.button`
  position: rleative;
  margin: auto;
  width: 345px;
  height: 51px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0c41ca;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  background: none;
`;
// 물방울 이미지 수정 필요 (누끼)
const Drop = styled.div`
  width: 54.582px;
  height: 155px;
  flex-shrink: 0;
  background: url("${process.env.PUBLIC_URL}/images/drop_blue.svg");
  background-size: cover;
`;
//func
const Main = () => {
  const navigate = useNavigate();

  // 페이지 이동
  const gotoWrite = () => {
    navigate("/Write");
  };
  const gotoMypage = () => {
    navigate("/Mypage");
  };
  const gotoRead = () => {
    navigate("/Read");
  };

  return (
    <Container>
      <ContentBox>
        <TitleBox></TitleBox>
        <UserCircle onClick={gotoMypage}>
          <UserImg></UserImg>
        </UserCircle>
        {/* 이름 받아오기 */}
        <TextBox>주연진님의 고래에요.</TextBox>
        <TextBox2>칭찬으로 고래를 춤추게 만들어보세요!</TextBox2>
        <DropList>
          <Drop onClick={gotoRead}></Drop>
        </DropList>
        <Whale></Whale>
        <GoButton onClick={gotoWrite}>칭찬하기</GoButton>
        <MakeButton>나도 만들기</MakeButton>
      </ContentBox>
    </Container>
  );
};

export default Main;
