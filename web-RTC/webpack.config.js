// webpack v4
const path = require('path');
module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};