const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // sideEffects: true, // doesnt work either
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
module.exports = config;
