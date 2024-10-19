import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CreateInterview from './pages/CreateInterview';
import JobPosting from './pages/JobPosting';
import Register from './pages/Register';
import Verification from './pages/Verification'; // Assuming you have a Verification page
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Sidebar from './components/Sidebar';
import './App.css';

// Layout component that switches headers based on the route
function AppLayout({ children }) {
  const location = useLocation(); // To check the current route

  // Render Header1 for Register and Verification, otherwise Header2
  const renderHeader = () => {
    if (location.pathname === '/register' || location.pathname === '/verify') {
      return <Header1 />;
    }
    return <Header2 />;
  };

  return (
    <div className="app-container">
      {renderHeader()}
      <div className="content-container">
        {/* Show Sidebar only if not on Register or Verification */}
        {(location.pathname !== '/register' && location.pathname !== '/verify') && <Sidebar />}
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/create-interview" element={<CreateInterview />} />
          <Route path="/job-posting" element={<JobPosting />} />
          {/* Add more routes as needed */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
