import type { Configuration } from "webpack";

const configuration: Configuration = {
  mode: "development",
  resolve: {
    extensions: [".tsx", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

export default configuration;
