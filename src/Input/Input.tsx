// Generated with util/create-component.js

import React from "react";
import styled from 'styled-components'

interface StyledInputProps {
  placeholder?: string;
  text?: string;
  onClick?: (e?: React.MouseEvent) => void

}

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid ${({ theme }) => theme.input.border};   
  position: static;
  width: 320px;
  height: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 18px;
  line-height: 1.5;
`
const StyledLabel = styled.label<StyledInputProps>`
  font-size: 16px;
  line-height: 1.5; 
  position: absolute;
  width: 49px;
  height: 24px;
  left: 0px;
  top: -32px;
`;

const LabeledInput = styled.div<StyledInputProps>`
display: flex;
flex-direction: column;
top: -18px;
position: relative;
`;
const defaultProps: StyledInputProps = {
  placeholder: 'placeholder'
}

export const Input: React.FC<StyledInputProps> = (props) => {
  return (
    <LabeledInput>
      <StyledLabel>{props.text}</StyledLabel>
      <StyledInput placeholder={props.placeholder} onClick={props.onClick} />
    </LabeledInput>
  );
}

Input.defaultProps = defaultProps;

export default Input;

