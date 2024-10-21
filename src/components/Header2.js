import React from 'react';
import logo from '../images/clogo.png';
import ProfileDropdown from './ProfileDropDown';
import '@fontsource/dm-sans'; 
import { Box } from '@mui/material';
const Header2 = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '13px 20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const contactStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };



  return (
    <header style={headerStyle}>
  <div style={logoStyle}>
    <Box
  component="img"
  src={logo}
  alt="Logo"
  sx={{
    width: '123px',
    height: '30px',
    ml: {sm:'10px'},
    mr:{xs:1}
    
  }}
/>

  </div>
  <div style={contactStyle}>
  <Box sx={{ display:{xs:"none",sm:"block"},fontWeight: "bold", fontSize: "17px", color: "#576474", fontFamily: "'DM Sans', sans-serif" ,mr:"30px"}}>
  Contact
</Box>
    <span style={{marginRight:"14px"}}><ProfileDropdown/></span>
  </div>
</header>
  );
}

export default Header2;
