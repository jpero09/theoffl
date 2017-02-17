var path = require('path');

module.exports = {
  entry: './app/client/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../../public/js')
  },
  module:{
    rules:[
	]
  }
};