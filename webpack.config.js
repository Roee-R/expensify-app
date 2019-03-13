const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // for seperate css files
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development' // =heroku prodaction, test from sript or development if neither

if(process.env.NODE_ENV==='test'){
  require('dotenv').config({path: '.env.test'}); // setup test firebase env veribles
}else if(process.env.NODE_ENV==='development'){
  require('dotenv').config({path: '.env.development'}); // setup development firebase env veribles
}

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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default    
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
      }),
      new webpack.DefinePlugin({ // sending firebase enviroments configuration to client js
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProdaction? 'source-map' : 'eval-source-map',
    devServer:{
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }; 
}
  