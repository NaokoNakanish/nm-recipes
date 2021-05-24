const path = require("path");

// https://webpack.js.org/concepts/
// module.exports = {
//   entry: "./path/to/my/entry/file.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "my-first-webpack.bundle.js",
//   },
// };

// https://bootstrap-vue.org/docs
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vue$",
      // If using the runtime only build
      path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    );
  },
};
