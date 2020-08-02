import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  padding: 4rem 1rem;
  background: #222;
`;

export const StyledForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
`;

export const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
  position: relative;
`;

export const TextInput = styled.input`
  font-size: 1.4rem;
  border: 0;
  height: 40px;
  border-bottom: 1px solid #1d1d1d;
  background: transparent;
  color: #fff;
  font-family: inherit;
  padding: 0.5rem 0.5rem 0.5rem 0;
  -webkit-appearance: none;
  border-radius: 0;
  cursor: text;
  transition: all 0.2s;
  touch-action: manipulation;

  &:focus {
    outline: 0;
    border-bottom: 1px solid #777;
  }

  &:placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.5);
  }

  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  transition: all 0.2s;
  touch-action: manipulation;
`;

export const ErrorMsg = styled.p`
  color: #e72f3d;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const RangeInput = styled.input`
  height: 26px;
  background: transparent;
  -webkit-appearance: none;
  margin: 1rem 0;
  width: 100%;

  &:focus {
    outline: none;

    &::-webkit-slider-runnable-track {
      background: #1d1d1b;
    }
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #50555c;
    background: #1d1d1b;

    border: 0px solid #000;
  }

  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000;
    border: 0px solid #000;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #777;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
`;

export const RangeOutput = styled.div`
  flex: 0 0 180px;
  text-align: right;
  align-self: center;
  font-size: 1.3rem;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: left;
  }
`;
export const Button = styled.button`
  background: transparent;
  color: #fff;
  padding: 0.75rem 2rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  border: 1px solid #777;
  transition: background 0.2s ease-in;

  &:hover {
    background: #1d1d1b;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const ColorOutput = styled.div`
  align-self: flex-end;
  border: 1px solid #1d1d1d;
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 12px;
  border-radius: 50%;
  right: 0;

  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;
