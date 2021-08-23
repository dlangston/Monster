import React from "react";
import styled from 'styled-components'

interface StyledHeadingsProps {
  text?: string;
}

const StyledHeadings = styled.h1<StyledHeadingsProps>`
  font-size: 32px;
  line-height: 1.25;
  color: #FFFFFF;
  text-transform: uppercase;
`

const defaultProps: StyledHeadingsProps = {
}

export const Headings: React.FC<StyledHeadingsProps> = (props) => {
  return (
    <StyledHeadings>{props.text}</StyledHeadings>
  );
}

Headings.defaultProps = defaultProps;

export default Headings;

