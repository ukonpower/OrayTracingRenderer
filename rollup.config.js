const info = require( './info.json' );
const typescript = require("rollup-plugin-typescript");

module.exports = {
  input: "./src/index.ts",
  output: {
    file: "",
    format: "",
    name: info.packageBuildName
  },
  plugins: [
    typescript(),
  ],
};