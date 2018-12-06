import HtmlWebPackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, importLoaders: 1 }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2)$/,
        use: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new Dotenv(),
    new CopyWebpackPlugin([
      {
        context: "./src/favicon/",
        from: "**/*"
      },
      {
        from: "./src/site.webmanifest"
      },
      {
        from: "./src/browserconfig.xml"
      }
    ])
  ]
};
