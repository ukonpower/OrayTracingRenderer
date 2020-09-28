const info = require( './info.json' );
const typescript = require("rollup-plugin-typescript2");
const glslify = require("rollup-plugin-glslify");
const resolve = require( 'rollup-plugin-node-resolve' );

module.exports = {
  input: "./src/index.ts",
  output: {
    file: "",
    format: "",
    name: info.packageBuildName,
    globals: {
      'three': 'THREE'
    },
  },
  plugins: [
    typescript(),
    glslify(),
    resolve(),
  ],
  external: [
    'three',
  ]
};