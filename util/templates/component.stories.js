module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import ${componentName} from './${componentName}';

export default {
  title: '${componentName}',
  parameters: {
    docs: {
      page: mdx,
    },
    decorators: [withKnobs, withA11y],
  },                  
};

export const ${componentName} = () => (
  <${componentName} />
);
${componentName}.story = {
  parameters: {
    'in-dsm': { id: 'Generated id from DSM'}
  }
};

`,
extension: `.test.js`
});