const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    //new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "./src/pages/index.html"),
      filename: "pages/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "news",
      template: path.resolve(__dirname, "./src/pages/news.html"),
      filename: "pages/news.html",
    }),
    new HtmlWebpackPlugin({
      title: "photo",
      template: path.resolve(__dirname, "./src/pages/photo.html"),
      filename: "pages/photo.html",
    }),
    new HtmlWebpackPlugin({
      title: "rozklad",
      template: path.resolve(__dirname, "./src/pages/rozklad.html"),
      filename: "pages/rozklad.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets/images/photos/pexels-ben-phillips-4781926.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-jeffry-surianto-8856048.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-egor-kamelev-7987532.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-wewe-yang-4850960.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-jeffry-surianto-9004398.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-irina-iriser-1086584.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-saya-kimura-978342.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-darrel-und-1297651.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-magda-ehlers-1635919.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/photos/pexels-valdemaras-d-1700731.jpg",
          to: "./assets/images/photos",
        },
        {
          from: "./src/assets/images/news/d1da2b5b336f1e48.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/d05b3e2b841d347f.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/b51f86e6001a5794.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/9b8815233fab7455.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/1e62ba7e143c8705.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/83ca9732816eff95.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/7eea07d3acadacd0.jpg",
          to: "./assets/images/news",
        },
        {
          from: "./src/assets/images/news/253739e8747f822c.jpg",
          to: "./assets/images/news",
        },
      ],
    }),
  ],

  devServer: {
    static: "./dist/pages",
    port: 8000,
    open: true,
  },
};
