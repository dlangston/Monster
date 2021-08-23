import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import rollupTypescript from "typescript-plugin-styled-components";

// typescript-plugin-styled-components
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();


// Import filename for desired CJS and ESM index fiels from package.json
const packageJson = require("./package.json");

export default {
  // Entrypoint for rollup to bundle all components
  input: "src/index.ts",
  // Array of objects specifing output config
  output: [
    // Support for Webpack and Node.js
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    // Support for Webpack2+ and Rollup
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    // prevents Rollup from bundling peer dependencies 
    peerDepsExternal(),
    // bundles third party dependencies in node_modules
    resolve(),
    // translates into CJS format
    commonjs(),
    // translates TS in JS
    typescript({ useTsconfigDeclarationDir: true }),
    // 3. add getCustomTransformer method to the loader config
    rollupTypescript({
      transformers: [
        () => ({
          before: [styledComponentsTransformer],
        }),
      ],
    }),
    // convert sass to css
    postcss()
  ]
};