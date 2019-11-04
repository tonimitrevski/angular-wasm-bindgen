// webpack.config.js
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  plugins: [
    new CircularDependencyPlugin({
      exclude: /\.wasm|node_modules|web-assembly/
    })
  ]
};
