import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalBasic.module.css";

function ModalBasic({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <img src={`${process.env.PUBLIC_URL}/images/sad_whale.png`} />
      <img src={`${process.env.PUBLIC_URL}/images/logout_text1.svg`} />
      <img src={`${process.env.PUBLIC_URL}/images/logout_text2.svg`} />
      <img
        src={`${process.env.PUBLIC_URL}/images/logout_cancel.svg`}
        onClick={closeModal}
      />
      <img src={`${process.env.PUBLIC_URL}/images/logout_btn.svg`} />
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
