import { Route, Routes } from "react-router-dom";
import Body from "../components/layout/Body";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Connections from "../pages/Connections";
import Requests from "../pages/Requests";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import Feed from "../pages/Feed";
import LoginProtectedRoute from "./LoginProtectedRoute";
import Chat from "../pages/Chat/Chat";
import MainChatPage from "../pages/Chat/MainChatPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/requests"
          element={
            <LoginProtectedRoute>
              <Requests />
            </LoginProtectedRoute>
          }
        />
        <Route
          path="/feed"
          element={
            <LoginProtectedRoute>
              <Feed />
            </LoginProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <LoginProtectedRoute>
              <Profile />
            </LoginProtectedRoute>
          }
        />
        <Route
          path="/connections"
          element={
            <LoginProtectedRoute>
              <Connections />
            </LoginProtectedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <LoginProtectedRoute>
              <MainChatPage />
            </LoginProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
