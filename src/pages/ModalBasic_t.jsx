import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalBasic_t.module.css";
import { useNavigate } from "react-router-dom";

function ModalBasic({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  // 페이지 넘어가게 해 주는 코드
  const navigate = useNavigate();

  // Splash로 이동
  const onClickImg = () => {
    navigate("/Main"); // '/Profile'로 수정
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.text}
        src={`${process.env.PUBLIC_URL}/images/text.svg`}
      />
      <img
        className={styles.no}
        src={`${process.env.PUBLIC_URL}/images/no.svg`}
        onClick={closeModal}
      />
      <img
        className={styles.yes}
        src={`${process.env.PUBLIC_URL}/images/yes.svg`}
        onClick={onClickImg}
      />
    </div>
  );
}

// PropTypes 정의
ModalBasic.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  writer: PropTypes.string,
};

export default ModalBasic;
