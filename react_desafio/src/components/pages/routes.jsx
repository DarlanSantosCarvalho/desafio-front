import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header/header";
import { HomePage } from "../pages/homePage";
import { CommentPage } from "./commentPage";
import { UserDataPage } from "./userDataPage";
import { BlogPage } from "./blogPage";
import { UserPage } from "./usersPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="/posts/:id/comments" element={<CommentPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<UserDataPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
