import React from 'react';
import styled from 'styled-components';

const ProfileDropdown = () => {
  return (
    <Container>
      <Avatar />
      <Name>Your Name</Name>
      <DropdownIcon>▼</DropdownIcon>
    </Container>
  );
};

export default ProfileDropdown;

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  width: fit-content;
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
`;
