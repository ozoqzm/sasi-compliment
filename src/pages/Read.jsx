import React, { useState, useCallback } from "react";
import styled from "styled-components";
//import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  max-width: 375px;
  height: 740px;
  margin: 0px auto;
  background: #fff;
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
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background-image: url("${process.env.PUBLIC_URL}/images/back.svg");
  background-size: cover;
`;
const InputBorder = styled.div`
  position: relative;
  margin: auto;
  margin-top: 15px;
  width: 345px;
  height: 447px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #3b6ae3;
  background: #eff6ff;
`;
const InputBox = styled.textarea`
  position: relative;
  margin: auto;
  width: 337px;
  height: 390px;
  border: none;
  background: none;
  outline: none;
  resize: none;
`;
const ProfilePic = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  left: 3px;
  margin-top: 10px;
  background-image: url("${process.env.PUBLIC_URL}/images/profilecircle.svg");
  background-size: cover;
  display: inline-block;
`;
const UserName = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px;
  top: -9px;
  color: #3b6ae3;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 10px;
`;

//func
const Read = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main");
  };

  return (
    <Container>
      <ContentBox>
        <Back onClick={gotoMain}></Back>
        <InputBorder>
          <ProfilePic></ProfilePic>
          <UserName>닉네임</UserName>
          <InputBox></InputBox>
        </InputBorder>
      </ContentBox>
    </Container>
  );
};

export default Read;
