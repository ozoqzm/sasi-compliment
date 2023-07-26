//import styles from "./ModalBasic.module.css";
import { useEffect, useRef } from "react";

function ModalBasic({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <p>모달창입니다.</p>
    </div>
  );
}
export default ModalBasic;
