import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    navigate(`/`)
    console.log('Logged out');
  };

  return (
    <Container>
      <Avatar />
      <Name>{localStorage.getItem('name')}</Name>
      <DropdownIcon onClick={handleToggle}>▼</DropdownIcon>
      {isOpen && (
        <DropdownMenu>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </DropdownMenu>
      )}
    </Container>
  );
};

export default ProfileDropdown;

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  width: fit-content;
  position: relative;
`;

const Avatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #c0c0c0;
`;

const Name = styled.div`
  margin-left: 10px;
  font-size: 16px;
  color: #555;
`;

const DropdownIcon = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: #555;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
