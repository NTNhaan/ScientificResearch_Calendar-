module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-transform-flow-strip-types",
    ],
  };
};
