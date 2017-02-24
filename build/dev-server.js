'use strict';

var http = require('http');
var ip = require('ip');
var path = require('path');
var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleWare = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware")
var argv = require('yargs').argv;
var opener = require("opener");
var editor = opener("documentation.odt");
var  log = require('./util').default.log;

var devtool = argv.devtool;

console.log('  argv:',argv,argv.devtool,' --->',`./webpack${devtool?'.devtool':''}.config`,require.main === module);

var webpackConfig  = {};

webpackConfig = require(`./webpack${devtool?'.devtool':''}.config`);

// console.log(process.versions.modules)
function handleConfig(config) {

    let localConfig = Object.create(config);
    let toString = Object.prototype.toString;
	  let hotMiddlewareScript = 'webpack-hot-middleware/client?timeout=20000&reload=true&noInfo=true';
	 let entry = localConfig.entry;

    localConfig.plugins.push( new webpack.HotModuleReplacementPlugin());
    // localConfig.devtool = '#cheap-module-eval-source-map' // ++
    // localConfig.devtool = '#cheap-module-source-map' // ++

    for(let key in entry){
        let item = entry[key];

        if(toString.call(item) === "[object Array]"){
            item.unshift(hotMiddlewareScript);
        }else{
            entry[key] = [hotMiddlewareScript,item]
        }

    }
    
    return localConfig;
}

webpackConfig = handleConfig(webpackConfig);
// console.log(" --------->webpackConfig:",webpackConfig);

var compiler = webpack(webpackConfig);
var app = express();

// Step 2: Attach the dev middleware to the compiler & the server
app.use(webpackDevMiddleWare(compiler, {
	noInfo: true, 
	stats: {
        colors: true
    },
	publicPath: webpackConfig.output.publicPath
}));

  // Step 3: Attach the hot middleware to the compiler & the server
app.use(webpackHotMiddleware(compiler, {
	log: console.log, 
	quiet:true
}));


  var server = http.createServer(app);

  server.listen(process.env.npm_package_config_port || argv.port || 8888, function() {
    let href= `${ip.address()}:${server.address().port}`;
    log(`listening on:${href}`);
    // opener(`http://${href}`);
  });
