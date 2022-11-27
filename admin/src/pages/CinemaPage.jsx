import React from "react";
import { Routes, Route } from "react-router-dom";
import CinemaList from "../components/Cinema/CinemaList";
import CinemaDetail from "../components/Cinema/CinemaDetail";
import CinemaInput from "../components/Cinema/CinemaInput";
function CinemaPage() {
  return (
    <Routes>
      <Route exact path="/" element={<CinemaList />} />
      <Route exact path=":id" element={<CinemaDetail />} />
      <Route exact path="new" element={<CinemaInput type="new" />} />
    </Routes>
  );
}

export default CinemaPage;
