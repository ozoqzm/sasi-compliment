// 동그란 원들 있는 페이지
import React, { useState, useCallback } from "react";
import styled from "styled-components";
//import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: linear-gradient(180deg, #fff 0%, #76adff 100%);
`;
const TitleBox = styled.div``;
const MyPage = styled.div``;
const TextBox = styled.div``;
const Whale = styled.div``;
const GoButton = styled.input``;

//func
const Main = () => {
  const navigate = useNavigate();

  //   return (
  //     <Background>
  //       <WhiteBox>
  //         <Logo>
  //           <img
  //             src={`${process.env.PUBLIC_URL}/images/ddwu_logo 1.png`}
  //             alt="logo"
  //             width="100px"
  //           />
  //         </Logo>
  //         <TextBox>
  //           동덕여자대학교 멋쟁이사자처럼
  //           <br />
  //           11기 아기사자 합격자 발표
  //         </TextBox>
  //         <BarName></BarName>
  //         <TextName>성함</TextName>
  //         {/*왜 input할 때 name 써줘야 하는지? */}
  //         <InputName
  //           type="text"
  //           name="name"
  //           value={text.name}
  //           onChange={onChange}
  //         ></InputName>
  //         <BarPhone></BarPhone>
  //         <TextPhone>전화번호</TextPhone>
  //         <InputPhone
  //           type="text"
  //           name="ph"
  //           value={text.ph}
  //           onChange={onChange}
  //         ></InputPhone>
  //         <Button onClick={discriminate}>
  //           <ButtonText>입력</ButtonText>
  //         </Button>
  //       </WhiteBox>
  //       <Text>DONGDUK x LIKELION</Text>
  //     </Background>
  //   );

  return (
    <Background>
      <TitleBox></TitleBox>
      <MyPage></MyPage>
      <TextBox></TextBox>
      <Whale></Whale>
      <GoButton></GoButton>
    </Background>
  );
};

export default Main;
