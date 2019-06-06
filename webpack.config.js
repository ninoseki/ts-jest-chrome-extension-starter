const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    background: path.join(__dirname, "src/background.ts"),
    content: path.join(__dirname, "src/content.ts"),
    options: path.join(__dirname, "src/options.ts"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/js"),
  },
};
