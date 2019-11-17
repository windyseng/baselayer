module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // test: /\.ttf$/,
    // loader: "url-loader",
    // include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
  }
};
