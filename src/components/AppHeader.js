import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  position: fixed;
  background: #1d1d1b;
  width: 100%;
  height: 50px;
  border: 1px solid #333;
  z-index: 3;
`;

const HeaderContent = styled.div`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 100px;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  align-self: center;
`;

export default function () {
  return (
    <Header>
      <HeaderContent>
        <Logo>motorway Test</Logo>
      </HeaderContent>
    </Header>
  );
}
