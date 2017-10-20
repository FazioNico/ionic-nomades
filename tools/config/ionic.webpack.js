/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   19-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 20-10-2017
 */

 var webpack = require('webpack');
 var config = require('@ionic/app-scripts/config/webpack.config.js')
 const CompressionPlugin = require("compression-webpack-plugin")
 var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

 config.dev.plugins.push(
   // Get access to IONIC_ENV, but also get access to NODE_ENV
   new webpack.EnvironmentPlugin({
     'IONIC_ENV': JSON.stringify(process.env.IONIC_ENV),
     'NODE_ENV': 'dev'
   }),
   new webpack.DefinePlugin({
       __DEV__: process.env.IONIC_ENV === 'dev',
       __PROD__: process.env.IONIC_ENV === 'prod'
   })
 )
 // config.prod.plugins.push(
 //   //new webpack.optimize.DedupePlugin(),
 // );
 config.dev.module.loaders.push(
   {
     test: /\.js$/,
     loader: process.env.IONIC_WEBPACK_TRANSPILE_LOADER
   }
 )

 config.prod.devtool = 'cheap-source-map';
 // config.prod.plugins.push(...[
 //   new BundleAnalyzerPlugin({
 //     reportFilename: 'report.html',
 //     openAnalyzer: true,
 //   })
 // ])
 config.prod.module.loaders.push(
   {
     test: /\.js$/,
     loader: process.env.IONIC_WEBPACK_TRANSPILE_LOADER
   }
 )

 module.exports = {
   dev: config.dev,
   prod: config.prod
 }
