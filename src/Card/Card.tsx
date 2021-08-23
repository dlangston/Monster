import React from "react";
import styled from 'styled-components'

interface StyledCardProps {
  url?: string;
}

const StyledCard = styled.div<StyledCardProps>`
  border-radius: 6px;
  background: ${props => `url(${props.url}) no-repeat top center`};
  height: 228px;
`;

const defaultProps: StyledCardProps = {
  // Assign default props here...
}

export const Card: React.FC<StyledCardProps> = (props) => {
  return (
    <StyledCard url={props.url} />
  );
}

Card.defaultProps = defaultProps;

export default Card;
