const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'src/module/gurps-mage-ascension-wizard.ts',
  output: {
    dir: './module',
    format: 'es',
    sourcemap: true,
  },
  plugins: [nodeResolve(), typescript({})],
};
