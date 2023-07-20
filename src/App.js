import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import Mypage from "./pages/Mypage";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/Mypage" element={<Mypage />} />{" "}
          {/* /Mypage 경로에 Mypage 컴포넌트를 매핑 */}
          <Route path="/Profile" element={<Profile />} />{" "}
          {/* /Profile 경로에 Profile 컴포넌트를 매핑 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
