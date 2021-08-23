// Generated with util/create-component.js

import React from "react";
import styled from 'styled-components'

interface StyledParagraphProps {
  text?: string;
  small?: boolean;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${({ theme }) => theme.paragraph.color};   
  font-size: ${props => (props.small ? "18px" : "25px")};
  line-height: ${props => (props.small ? "1.27" : "1.24")};
`;

const defaultProps: StyledParagraphProps = {

}

export const Paragraph: React.FC<StyledParagraphProps> = (props) => {
  return (
    <StyledParagraph small={props.small}>{props.text}</StyledParagraph>
  );
}

Paragraph.defaultProps = defaultProps;

export default Paragraph;

