const Plugin = require("./src/plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  plugins: [new Plugin()]
};
