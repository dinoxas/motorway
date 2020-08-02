import styled, { keyframes } from 'styled-components';

export const loadingAnimation = keyframes`
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #ddd;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1.5s infinite;
`;

export const Button = styled.button`
  color: #1d1d1b;
  border: 1px solid #1d1d1b;
  background: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  cursor: pointer;
  line-height: 1;
  height: 40px;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  position: absolute;
  bottom: 30px;
  letter-spacing: 0.06em;
  z-index: 1;
  opacity: 0;
  transition: all 0.4s ease-in-out;

  &:hover,
  &:focus {
    color: #1d1d1b;
    background: #fff;
    text-shadow: none;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  &:hover {
    img {
      filter: grayscale(0) brightness(125%);
      transform: scale(1.15);
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  z-index: 2;
  position: absolute;
  width: 100%;
  padding: 10px;
  height: 60px;
  justify-content: space-between;
  text-shadow: 1px 1px 2px #2d2d2b;
  color: #fff;
  top: 0;
`;

export const UserWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  border: 1px solid #2d2d2b;
  z-index: 2;
`;

export const UserText = styled.div`
  align-self: center;
  margin-left: 10px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;
  position: absolute;
  z-index: 0;
  display: block;
  transition: transform 0.4s, filter 1s ease-in-out;
  filter: grayscale(100%) brightness(65%);
`;

export const ModalContent = styled.p`
  color: #2d2d2b;
  padding: 10px;
`;
