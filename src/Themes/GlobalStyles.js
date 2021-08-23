import { createGlobalStyle } from "styled-components";
import './Fonts/style.css';
export const GlobalStyles = createGlobalStyle`
* {
  font-family: "Proxima Nova", Milliard Book, cursive;
}
   body {
    font-family: "Proxima Nova", Milliard Book, cursive !important;
     background: ${({ theme }) => theme.body.background};
     color: ${({ theme }) => theme.body.color};
     transition: all 0.50s linear; 
  }
`
