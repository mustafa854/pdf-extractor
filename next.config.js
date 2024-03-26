// // module.exports = (phase, { defaultConfig }) => {
// //   return {
// //     module: {
// //       rules: [
// //         {
// //           test: /.tsx?$/,
// //           loader: "babel-loader",
// //           exclude: /node_modules/,
// //         },
// //         {
// //           test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|pdf)(\?[a-z0-9=.]+)?$/,
// //           loader: "url-loader?limit=100000",
// //         },
// //       ],
// //     },
// //   };
// // };

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.pdf$/,
//       use: [
//         {
//           loader: "file-loader",
//         },
//       ],
//     });
//     return config;
//   },
// };

module.exports = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};
