const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    dropStyle: "./src/ddm-style.css",
    dropDownMenu: "./src/dropDownMenu.js",
    imgSliderStyle: "./src/imgslider-style.css",
    imgSlider: "./src/imageSlider.js",
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
        type: "asset/resource",
      },
    ],
  },
};
