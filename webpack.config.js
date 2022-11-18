const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    historyApiFallback: true,
    port: 4000,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(tsx|ts)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
};
