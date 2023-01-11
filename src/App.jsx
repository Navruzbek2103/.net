import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Doc from "./pages/Documentation";
import Int from "./pages/Interview";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer"
import AllTopics from "./pages/AllTopics";
import Algorithms from "./pages/Algorithms";
import Database from "./pages/Database";
import CSharp from "./pages/CSharp";
import DotNet from "./pages/DotNet";
import Net from "./pages/Lesson";
import Netdev from "./pages/Netdev";
import Javascript from "./pages/Javascript";
import Data from "./pages/Data";
import Pro from "./pages/Project";
import Comment from "./pages/Comment";
import Loader from "./../src/layout/Layout";

const App = () => {
  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/doc" element={<Doc />}>
          <Route index element={<Netdev />} />
          <Route path="/doc/net" element={<Net />} />
          <Route path="/doc/js" element={<Javascript />} />
          <Route path="/doc/data" element={<Data />} />
          <Route path="/doc/pro" element={<Pro />} />
          <Route path="/doc/comment" element={<Comment />} />
        </Route>
        <Route path="/int" element={<Int />}>
          <Route index path="/int/allTopics" element={<AllTopics />} />
          <Route index path="/int/algorithms" element={<Algorithms />} />
          <Route index path="/int/database" element={<Database />} />
          <Route index path="/int/csharp" element={<CSharp />} />
          <Route index path="/int/dotnet" element={<DotNet />} />
        </Route>
      </Routes>
      {/* <Main /> */}
    </>
  );
};

export default App;
