const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/i,
        use: "asset/resource",
      },
    ],
  },
};
