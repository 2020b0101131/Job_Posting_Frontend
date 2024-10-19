import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
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

  return (
    <div style={sidebarStyle}>
      <span style={iconStyle} role="img" aria-label="home">
        <HomeIcon style={{ fontSize: '30px', color: '#4A5568',marginBottom:"25rem" }} />
      </span>
    </div>
  );
}

export default Sidebar;
