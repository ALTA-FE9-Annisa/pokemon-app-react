/* eslint-disable react-hooks/exhaustive-deps */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailPoke from "../pages/DetailPoke";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:pokemon_name" element={<DetailPoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
