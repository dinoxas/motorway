import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 140px;
  grid-auto-flow: dense;
`;

export const GridTile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-column-start: auto;
  grid-row-start: auto;

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
