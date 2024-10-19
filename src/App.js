import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import CreateInterview from './pages/CreateInterview';
// import JobPosting from './pages/JobPosting';
import Register from './pages/Register';

function App() {
  const appStyle = {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
  };

  const contentWrapperStyle = {
    display: 'flex',
    flex: 1,
  };

  return (
    <div style={appStyle}>
      <Header />
      <div style={contentWrapperStyle}>
        <Sidebar />
        {/* <CreateInterview /> */}
        {/* <JobPosting/> */}
        <Register/>
      </div>
    </div>
  );
}

export default App;
