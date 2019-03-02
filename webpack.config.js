const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // for seperate css files

module.exports = (env) =>{ // the function will called with env veribe
  const isProdaction = env==='prodaction' // get the env from the script
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules:[{
        loader: 'babel-loader',
        test: /\.js$/, 
        exclude: /node_modules/ 
      },
      {
        test: /\.s?css/,
        use: [{
          loader: MiniCssExtractPlugin.loader 
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default    
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "styles.css"
      })
    ],
    devtool: isProdaction? 'source-map' : 'inline-source-map',
    devServer:{
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }; 
}
  