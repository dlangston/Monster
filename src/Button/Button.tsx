import * as React from "react"
import styled, { css } from 'styled-components'

interface StyledButtonProps {
  state?: 'primary' | 'tertiary' ;
  variant?: boolean;
  text?: string;
  small?: boolean;
  onClick?: (e?: React.MouseEvent) => void
}

// background-color: ${props => props.theme.colors.primrose};
const StyledButton = styled.button<StyledButtonProps>`
  text-transform: capitalize;
  padding: 0px;
  border-radius: 4px;
  height: ${props => (props.small ? "32px" : "55px")};
  font-size: ${props => (props.small ? "14px" : "18px")};
  line-height: ${props => (props.small ? "1.28" : "1.5")}; /* line-height should use unitless number - 27px = 1.28 unitless */
  width: ${props => (props.small ? "160px" : "183px")};
  ${props => (props.state === "primary")
    && css`
      background: ${({ theme }) => theme.button.primary.background};   
      border: 2px solid ${({ theme }) => theme.button.primary.border};   
      color: ${({ theme }) => theme.button.primary.color};   
    `}
    ${props => (props.state === "tertiary")
    && css`
      background: ${({ theme }) => theme.button.tertiary.background};
      border: 2px solid ${({ theme }) => theme.button.tertiary.border};
      color: ${({ theme }) => theme.button.tertiary.color};   
      &:hover {
        filter: drop-shadow(0px 4px 4px ${({ theme }) => theme.button.tertiary.hover});
      }
      &:active {
        padding-top: 2px;
        filter: none;
      }
    `}
`;

const defaultProps: StyledButtonProps = {
  state: 'primary',
  text: 'button Text',
  variant: false,
}

export const Button: React.FC<StyledButtonProps> = (props) => {
  
  return (
    <StyledButton state={props.state} onClick={props.onClick} variant={props.variant} small={props.small}>{props.text}</StyledButton>
  );
}

Button.defaultProps = defaultProps;

export default Button;

