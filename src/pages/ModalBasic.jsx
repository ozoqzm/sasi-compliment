import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  /* 최상단 위치 */
  z-index: 999;
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;
const CloseBtn = styled.button`
  position: relative;
  position: absolute;
  right: 10px;
  top: 10px;
`;

function ModalBasic({ setModalOpen, handleDeleteButton, handleUpdateButton }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <CloseBtn onClick={closeModal}>X</CloseBtn>
      <p>모달창입니다.</p>
      <button onClick={() => handleDeleteButton(-1)}>글 삭제</button>
      <button onClick={() => handleUpdateButton(1)}>글 수정</button>
    </Container>
  );
}
export default ModalBasic;
