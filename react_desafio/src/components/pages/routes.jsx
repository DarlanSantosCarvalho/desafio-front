import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../menu/menu";
import { CommentPage } from "./commentPage";
import { UserDataPage } from "./userDataPage";
import { BlogPage } from "./blogPage";
import { UserPage } from "./usersPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/posts" element={<BlogPage />} />
        <Route exact path="/posts/:id/comments" element={<CommentPage />} />
        <Route exact path="/users" element={<UserPage />} />
        <Route exact path="/users/:id" element={<UserDataPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
