import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
  const navigate = useNavigate();

  const sidebarStyle = {
    width: '60px',
    height: '100%',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #dee2e6',
  };

  const iconStyle = {
    fontSize: '24px',
    color: '#6c757d',
  };

  const handleHomeClick = () => {
    navigate('/create-interview'); 
  };

  return (
    <div style={sidebarStyle}>
      <span style={iconStyle} role="img" aria-label="home" onClick={handleHomeClick}>
        <HomeIcon sx={{ fontSize: '30px', color: '#4A5568', mb:{xs:70,sm:55}, cursor: 'pointer' }} />
      </span>
    </div>
  );
}

export default Sidebar;
