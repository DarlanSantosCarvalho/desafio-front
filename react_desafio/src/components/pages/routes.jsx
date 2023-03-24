import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./post";
import { Posts } from "./posts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/posts/:id/comments" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
