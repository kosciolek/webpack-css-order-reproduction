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
        test: /\.module\.css$/i,
        // sideEffects: true, // doesnt work either
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "class__[name]__[local]",
              },
            },
          },
        ],
      },
    ],
  },
};
module.exports = config;
