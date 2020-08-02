import styled, { css } from 'styled-components';

const sharedHeading = css`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 180px;
  grid-auto-flow: dense;
`;

export const GridTile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-column-start: auto;
  grid-row-start: auto;
  background-color: #ddd;

  &:hover {
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.8);
  }

  &:nth-child(2n + 2) {
    grid-row-end: span 3;
  }
  &:nth-child(4n + 1) {
    grid-row-end: span 2;
  }
`;

export const AppLayout = styled.div`
  padding: 5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Heading = styled.h1`
  ${sharedHeading}
`;

export const SubHeading = styled.h2`
  ${sharedHeading}
`;

export const Intro = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;
