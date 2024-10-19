import React from 'react';

const Form = () => {
  const formContainerStyle = {
    border: '1px solid #dee2e6',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'left',
  };

  const headingStyle = {
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
    fontSize: '14px',
    color: '#6c757d',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headingStyle}>Sign Up</h2>
      <p style={paragraphStyle}>Lorem Ipsum is simply dummy text</p>
      <form style={formStyle}>
        <input type="text" placeholder="Name" style={inputStyle} />
        <input type="text" placeholder="Phone no" style={inputStyle} />
        <input type="text" placeholder="Company" style={inputStyle} />
        <input type="email" placeholder="Company Email" style={inputStyle} />
        <input type="text" placeholder="Employee Size" style={inputStyle} />
        <button 
          type="submit" 
          style={buttonStyle} 
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Proceed
        </button>
      </form>
    </div>
  );
}

export default Form;
