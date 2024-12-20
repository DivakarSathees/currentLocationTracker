const path = require('path');

module.exports = {
  entry: './long.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Directory for built assets
    filename: 'long.bundle.js', // Output file name
  },
  mode: 'production', // Minifies and optimizes the code
  resolve: {
    fallback: {
      http: false,
    },
  },
};
