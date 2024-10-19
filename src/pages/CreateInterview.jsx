import React from 'react';
import '@fontsource/dm-sans'; 

const CreateInterview = () => {
  const mainContentStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  };

  const buttonStyle = {
    padding: '7px 16px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginLeft:"2.1rem",
    marginTop:"2.5rem",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight:"bold",
    paddingBottom:"9px"
    
  };

  return (
    <div style={mainContentStyle}>
      <button style={buttonStyle}>Create Interview</button>
    </div>
  );
}

export default CreateInterview;
