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

function ModalBasic({ setModalOpen, title, content, writer }) {
  //   const [compls, setCompls] = useState([]);
  //   const [date, setDate] = useState(""); // 날짜 바꾸기
  //   const [text, setText] = useState(""); // 내용 바꾸기
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const keyId = location.state.keyId; // useLocation으로 값 받아옴
  //   const savedcompls = localStorage.getItem("compls"); // 로컬 스토리지에서 가져오기

  //   const gotoMain = () => {
  //     navigate("/");
  //   };

  //   useEffect(() => {
  //     if (savedcompls) {
  //       setCompls(JSON.parse(savedcompls)); // 투두리스트 배열 생성 compls로 설정
  //     }
  //   }, [savedcompls]);

  //   useEffect(() => {
  //     const complToUpdate = compls.find((compl) => compl.id === parseInt(keyId));
  //     if (complToUpdate) {
  //       // id 가 일치하면.. 이 값을 인 풋에 띄워줘야 함
  //       setDate(complToUpdate.date);
  //       setText(complToUpdate.text);
  //     }
  //   }, [compls, keyId]);

  //   // 글 삭제 버튼 누를 시
  //   const handleDeleteButton = () => {
  //     const updatedcompls = compls.filter(
  //       (compl) => compl.id !== parseInt(keyId)
  //     );
  //     setCompls(updatedcompls);
  //     localStorage.setItem("compls", JSON.stringify(updatedcompls));
  //     navigate("/Main");
  //   };

  //   // 글 수정 버튼 누를 시
  //   const handleUpdateButton = () => {
  //     const updatedcompls = compls.map((compl) =>
  //       compl.id === parseInt(keyId) ? { ...compl, text: text } : compl
  //     );
  //     setCompls(updatedcompls);
  //     localStorage.setItem("compls", JSON.stringify(updatedcompls));
  //     navigate("/Main");
  //   };

  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <CloseBtn onClick={closeModal}>X</CloseBtn>
      <p>모달창입니다.</p>
      {/* <button onClick={handleDeleteButton}>글 삭제</button>
      <button onClick={handleUpdateButton}>글 수정</button> */}
    </Container>
  );
}
export default ModalBasic;
