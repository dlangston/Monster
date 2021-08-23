module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js

import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ${componentName} } from './${componentName}'

describe('${componentName} Test', () => {
  it('renders correctly', () => {
  // test('${componentName} Test', () => {
    const tree = renderer.create(
        <${componentName} />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the foo modifier', () => {
    const tree = renderer.create(
      <${componentName} />      
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds the bar modifier', () => {
    const tree = renderer.create(
      <${componentName} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds custom text', () => {
    const tree = renderer.create(
      <${componentName} text="Custom Text" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

`,
extension: `.test.tsx`
});
