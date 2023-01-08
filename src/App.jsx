import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Doc from "./pages/Documentation";
import Int from "./pages/Interview";
import Test from "./pages/Test";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/int" element={<Int />} />=
        <Route path="/test" element={<Test />} />
      </Routes>
      {/* <Main /> */}
    </>
  );
};

export default App;
