const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");

// https://webpack.js.org/concepts/
// module.exports = {
//   entry: "./path/to/my/entry/file.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "my-first-webpack.bundle.js",
//   },
// };

// // https://bootstrap-vue.org/docs
// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias.set(
//       "vue$",
//       // If using the runtime only build
//       path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
//       // Or if using full build of Vue (runtime + compiler)
//       // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
//     );
//   },
// };

// https://vue-loader.vuejs.org/guide/pre-processors.html#sass
// https://vue-loader.vuejs.org/guide/#manual-setup
module.exports = {
  mode: "development",
  // webpackの標準設定
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  // bootstrapの設定
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vue$",
      // If using the runtime only build
      // path.resolve(__dirname, "node_modules/vue/dist/vue.runtime.esm.js")
      // Or if using full build of Vue (runtime + compiler)
      path.resolve(__dirname, "node_modules/vue/dist/vue.esm.js")
    );
  },
  // vue-loaderの設定
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // plugin omitted
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
};
