import React, {useState } from 'react';
import logo from './images/logo.svg';
import { Button } from './Button/Button';
import { Input } from './Input/Input';
import { Layout, Grid, StyledLayoutHeader, StyledLayoutSearch, StyledLayoutFooter } from '../src/Layout/Layout';
import  { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Themes/GlobalStyles';
import { Headings } from './Headings/Headings';
import { Paragraph } from './Paragraph/Paragraph';
import { lightTheme, darkTheme } from './Themes/themes';
import FetchAPI from "./Card/util/Api"

function App() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => { theme === "light" ? setTheme("dark") : setTheme("light") }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <>
    <GlobalStyles />
        <Layout>
          <StyledLayoutHeader area="header">
            <Grid columns="64px 1fr" align="center">
              <img src={logo} alt="Monster Logo" height="64px" width="64px" />
              <Headings text="monstergram" />
            </Grid>
          </StyledLayoutHeader>
          
          <StyledLayoutSearch area="search" columns="1fr" >
            <Grid align="center">
              <Input text="Search" placeholder="Enter a username" />
              <Paragraph text="Username's Photos" />
            </Grid>

            <Grid justify="end" align="center"> 
              <Button onClick={toggleTheme} state="tertiary"  text={theme === 'light' ? 'switch to dark mode' : 'switch to light mode'} small />
              <Paragraph text="Showing 1-9 of 43" small />
            </Grid>
          </StyledLayoutSearch>

            <FetchAPI />
            
          <StyledLayoutFooter justify="end">
            <Button state="primary" text="view more" />
          </StyledLayoutFooter>
        </Layout>
        </>
      </ThemeProvider>
  );
}

export default App;
