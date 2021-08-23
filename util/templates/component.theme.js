module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import theme from 'styled-theming'
import { css } from "styled-components";
import { themeDefault } from '../../Themes/themeDefault'

export const foo = theme("mode", {
  light:
  dark:
});


export const foo = theme.variants("mode", "foo-bar" {
  foobar1: {
    light:
    dark:
  },
  foobar2: {
    light: 
    dark:
  },
});

`,
  extension: `Theme.ts`
});
