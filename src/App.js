import React from "react";
import { Route, Routes } from "react-router-dom";
import FormData from "./components/formData";
import InfoTable from "./components/infoTable";

function App() {
  return (
    <div>
      {/*<HookUseRef/>*/}
      {/*<FetchApi/>*/}
      {/* <PostData />*/}
      <Routes>
        <Route path="/" element={<InfoTable />}></Route>
        <Route path="/formData" element={<FormData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
