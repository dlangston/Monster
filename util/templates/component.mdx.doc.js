module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import ${componentName} from './${componentName}'
import { Story, Preview } from '@storybook/addon-docs/blocks'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from '../../Themes/themeDefault'
import ${componentName} from './${componentName}';



# ${componentName}
#### put subtext here...
<Preview>
  <Story id="id bassed-on--title path" />
</Preview>

<Props of={${componentName}} />


<Story id="id bassed-on--title path" />

`,
  extension: `.stories.mdx`
});
