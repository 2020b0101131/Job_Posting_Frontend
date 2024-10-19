import React from 'react';
import logo from '../images/clogo.png';
import '@fontsource/dm-sans'; 

const Header1 = () => {
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
    <img src={logo} alt="Logo" style={{ width: '123px', height: '30px',marginLeft:"10px" }} />
  </div>
  <div style={contactStyle}>
  <div style={{ fontWeight: "bold", fontSize: "17px", color: "#576474", fontFamily: "'DM Sans', sans-serif" ,marginRight:"30px"}}>
  Contact
</div>
 
  </div>
</header>
  );
}

export default Header1;
