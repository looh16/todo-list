const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "build")
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
      ]

  };

