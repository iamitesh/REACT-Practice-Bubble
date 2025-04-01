const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index"), // ✅ Check if this file exists
  devServer: {
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "existingApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "../src/App", // ✅ Use relative paths
      },
      shared: require("../package.json").dependencies, // ✅ Correct dependency import
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
