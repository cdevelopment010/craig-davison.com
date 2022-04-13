const path = require('path'); 

module.exports = {
    mode: 'development', 
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'main.js'
    },
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
}