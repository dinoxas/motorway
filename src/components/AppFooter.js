import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  background: #1d1d1b;
  color: white;
  height: 80px;
  padding: 6rem;
  text-align: center;
`;

export default function () {
  return (
    <Footer>
      <p>
        Coded with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by dinoxas
      </p>
    </Footer>
  );
}
