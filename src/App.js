import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Fail from "./pages/Write";
import Pass from "./pages/Read";

function App() {
  return (
    <Main />
    // <BrowserRouter>
    //   <div
    //     style={{
    //       maxWidth: "1280px",
    //       margin: "0px auto",
    //       minHeight: "100vh",
    //       position: "relative",
    //     }}
    //   >
    //     <Routes>
    //       <Route path="/" element={<Main />} />
    //       <Route path="/write" element={<Write />} />
    //       <Route path="/read" element={<Read />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
