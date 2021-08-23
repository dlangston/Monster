module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js

import React from "react";
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from '../../Themes/themeDefault'
import { themesOfFoo } from './${componentName}Theme'
import root from 'react-shadow/styled-components'
import Sanitize from '../../reset/sanitize'

interface Styled${componentName}Props {

}

const Styled${componentName} = styled.foo<Styled${componentName}Props>
// use tagged template literal syntax
;

const defaultProps: Styled${componentName}Props = {
  // Assign default props here...
}

export const ${componentName}: React.FC<Styled${componentName}Props> = (props) => {
  return (
    // root, Sanitize, and ThemeProvider may be optional
    // <root.foo>
    // <Sanitize />
    //   <ThemeProvider theme={{mode: 'foo'}}>
        <Styled${componentName} />
    //   </ThemeProvider>
    // </root.foo>
  );
}

${componentName}.defaultProps = defaultProps;

export default ${componentName};

`,
extension: `.tsx`
});

