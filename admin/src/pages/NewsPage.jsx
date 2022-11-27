import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from "../components/News/NewsList";
import NewsDetail from "../components/News/NewsDetail";
import NewsInput from "../components/News/NewsInput";
function NewsPage() {
  return (
    <Routes>
      <Route exact path="/" element={<NewsList />} />
      <Route exact path=":id" element={<NewsDetail />} />
      <Route exact path="new" element={<NewsInput type="new" />} />
    </Routes>
  );
}

export default NewsPage;
