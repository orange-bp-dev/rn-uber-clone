module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    // plugins: ["module:react-native-dotenv"]
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env"
        }
      ]
    ]
    // plugin: [
    //   [
    //     "module:react-native-dotenv",
    //     {
    //       moduleName: "@env",
    //       path: ".env"
    //     }
    //   ]
    // ]
  }
}
