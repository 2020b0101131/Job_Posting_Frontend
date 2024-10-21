import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import CreateInterview from "./pages/CreateInterview";
import JobPosting from "./pages/JobPosting";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { useSelector } from 'react-redux';

function AppLayout({ children }) {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === "/" || location.pathname === "/verify") {
      return <Header1 />;
    }
    return <Header2 />;
  };

  return (
    <div className="app-container">
      {renderHeader()}
      <div className="content-container">
        {location.pathname !== "/" && location.pathname !== "/verify" && (
          <Sidebar />
        )}
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

function AuthRedirect() {
  const token = localStorage.getItem("token");
  // const rvStatus = useSelector((state) => state.vStatus);
  const vStatus=localStorage.getItem("vStatus");
  const flag=localStorage.getItem("flag");
  const navigate = useNavigate();

  useEffect(() => {
    if (vStatus==flag && token) {
      navigate("/job-posting");
    }
  }, [vStatus,token,flag]);

  return null;
}

function ProtectedRoute({ element, redirectTo }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(redirectTo);
    }
  }, [token, navigate, redirectTo]);

  return element;
}

function App() {
  return (
    <Router>
      <AuthRedirect />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/verify" element={<Verification />} />

          <Route
            path="/create-interview"
            element={
              <ProtectedRoute element={<CreateInterview />} redirectTo="/" />
            }
          />
          <Route
            path="/job-posting"
            element={<ProtectedRoute element={<JobPosting />} redirectTo="/" />}
          />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
