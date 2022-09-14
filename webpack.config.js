const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  mode: "development",
  module: {
    rules: [
      // CSS files rule
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //  JS files rule
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // Images rule
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack practice", // The title of the website we want to give
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
};

module.exports = webpackConfig;
