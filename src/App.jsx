import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTERS } from "./constants/routers";
import UsersPage from "./pages/UsersPage";
import CreateUserPage from "./pages/CreateUserPage";
import UserDetailPage from "./pages/UserDetailPage";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter className="tw-min-h-screen tw-w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to={ROUTERS.USERS} />} />
        <Route path={ROUTERS.USERS} element={<UsersPage />} />
        <Route path={ROUTERS.CREATE_USER} element={<CreateUserPage />} />
        <Route path={ROUTERS.USER_DETAIL} element={<UserDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
