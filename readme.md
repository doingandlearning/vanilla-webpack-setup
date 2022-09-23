# Vanilla Webpack Setup

This project can be freely copied and reused.

It aims to give a skeleton for the main functionality that a WebPack project might
offer for any vanilla project.

```js
module.exports = {
  mode: "none", 
	// This is the entry JavaScript file for your project.
  entry: "./src/index.js", 
	// This is describing how your JS files will be bundled.
  output: {
    path: __dirname + "/dist",  
    filename: "bundle.js", 
  },
	// This is the directory your output will be built to.
  devServer: { 
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
			// This is testing all CSS files and doing the tree-shaking, etc.
			// There are plugins for all of the CSS libraries (SASS, SCSS, Tailwind, etc)
      {
        test: /\.css$/,  // 4  
        use: ["style-loader", "css-loader"],
      },
			// This is running babel, the preset defined will opt for ES5.
      {
        test: /\.js$/,  // 5
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
```