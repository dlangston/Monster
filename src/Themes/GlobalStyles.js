import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     font-family: "Proxima Nova", cursive;
     background: ${({ theme }) => theme.body.background};
     color: ${({ theme }) => theme.body.color};
     transition: all 0.50s linear; 
  }
`
