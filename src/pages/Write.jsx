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
const CheckSet = styled.div`
  position: relative;
  left: 250px;
  display: inline-block;
`;
const CameraBtn = styled.div`
  position: relative;
  left: 15px;
  width: 30px;
  height: 30px;
  top: 7px;
  flex-shrink: 0;
  background-image: url("${process.env.PUBLIC_URL}/images/camera.svg");
  background-size: cover;
  display: inline-block;
`;
const AnonyText = styled.div`
  position: relative;
  display: inline-block;
  color: #3b6ae3;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const GoButton = styled.button`
  position: rleative;
  margin: auto;
  margin-top: 20px;
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

// 체크박스 컴포넌트
function Checkbox({ children, disabled, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}

//func
const Write = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/Main");
  };
  const gotoComplete = () => {
    navigate("/Complete");
  };

  const [anonymous, setAnonymous] = useState(false);

  return (
    <Container>
      <ContentBox>
        <Back onClick={gotoMain}></Back>
        <InputBorder>
          <InputBox></InputBox>
          <CameraBtn></CameraBtn>
          <CheckSet>
            <Checkbox checked={anonymous} onChange={setAnonymous}>
              <AnonyText>익명</AnonyText>
            </Checkbox>
          </CheckSet>
        </InputBorder>

        <GoButton onClick={gotoComplete}>메세지 작성하기</GoButton>
      </ContentBox>
    </Container>
  );
};

export default Write;
