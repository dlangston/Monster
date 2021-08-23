import React from "react";
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { StyledParagraph } from '../Paragraph/Paragraph';

interface StyledLayoutProps {
  align?: string;
  justify?: string;
  columns?: string;
  rows?: string;
  gap?: string;
  rowGap?: string;
  colGap?: string;
  area?: string;
}

export const Grid = styled.div<StyledLayoutProps>`
  display: grid;
  grid-template-columns: ${({columns}) => columns};
  grid-template-rows: ${({rows}) => rows};
  grid-gap: ${({gap}) => gap};
  grid-row-gap: ${({rowGap}) => rowGap};
  grid-column-gap: ${({colGap}) => colGap};
  grid-area: ${({area}) => area};
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
`;

const StyledLayout = styled.section<StyledLayoutProps>`
  display: grid;
  grid-template-columns: 1fr 1024px 1fr;
  /* grid-template-rows: 80px 100%; */
  grid-template-areas: "header header header"
                       "search search search"
                       "content content content"
                       "foot foot foot";
`;
export const StyledLayoutHeader = styled(Grid)<StyledLayoutProps>`
  background: ${({ theme }) => theme.header.background};   
`;

export const StyledLayoutSearch = styled(Grid)`
  grid-template-areas: "left right";
  margin: 0 114px;
  margin-top: 97px;
  height: 153px;
  border-bottom: 1px solid #6E46AE;
  /* div:last-child ${StyledParagraph} {
    top: 285px;
    margin-left: 20px;
    white-space: nowrap;
  }
  div:first-child ${StyledParagraph} {
    left: 114px;
    top: 282px;
   } */
`;

export const StyledLayoutContent = styled(Grid)`
  margin: 56px 114px;
`;

export const StyledLayoutFooter = styled(Grid)`
  grid-area: foot;
  padding-top: 24px;
  border-top: 1px solid #6E46AE;
  margin: 0 114px;
  margin-bottom: 178px;
`;

const defaultProps: StyledLayoutProps = {
  // Assign default props here...
}

export const Layout: React.FC<StyledLayoutProps> = (props) => {
  return (
      <ThemeProvider theme={{mode: 'light'}}>
        <StyledLayout>
          { props.children }
        </StyledLayout>
      </ThemeProvider>
  );
}

Layout.defaultProps = defaultProps;

export default Layout;
