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


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/explore" element={<Main />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/int" element={<Int />} >
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
