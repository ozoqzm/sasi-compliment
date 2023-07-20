import React from "react";
import styled from "styled-components";

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

const ProfileText = styled.div`
  position: relative;
  left: 140px;
  top: -27px;
`;

const ImageUpload = styled.div`
  position: relative;
  margin-top: 43px;
  left: 105px;
`;

const InputBox = styled.div`
  position: relative;
  width: 221px;
  border: none;
  outline: none;
  border-bottom: 2px solid #184bce;
  left: 80px;
  top: 40px;
  /* 추가한 스타일 */
  input {
    border: none;
    outline: none;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.5px;
    width: 100%; /* input 요소가 부모 요소의 크기를 채우도록 */
    color: black; /* input 텍스트 색상을 검정색으로 */
    &::placeholder {
      /* placeholder 텍스트 색상을 파란색(#698ff0)으로 */
      color: #698ff0;
    }
  }
`;

const CancelBox = styled.div`
  position: relative;
  top: 300px;
  left: 20px;
`;

const ChangeBox = styled.div`
  position: relative;
  top: 253px;
  left: 195px;
`;

const mypage = () => {
  return (
    <Container>
      <ContentBox>
        <Back>
          <img src={`${process.env.PUBLIC_URL}/images/back.svg`} />
        </Back>
        <ProfileText>
          <img src={`${process.env.PUBLIC_URL}/images/profile_text.svg`} />
        </ProfileText>
        <ImageUpload>
          <img src={`${process.env.PUBLIC_URL}/images/imgupload.svg`} />
        </ImageUpload>
        <InputBox>
          <input type="text" placeholder="닉네임을 입력해주세요." />
        </InputBox>
        <CancelBox>
          <img src={`${process.env.PUBLIC_URL}/images/cancel_btn.svg`} />
        </CancelBox>
        <ChangeBox>
          <img src={`${process.env.PUBLIC_URL}/images/change_btn.svg`} />
        </ChangeBox>
      </ContentBox>
    </Container>
  );
};

export default mypage;
