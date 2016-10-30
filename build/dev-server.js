'use strict';

var http = require('http');
var path = require('path');
var webpack = require('webpack');
var express = require('express');
var webpackDevMiddleWare = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware")
var argv = require('yargs').argv;
var webpackConfig = require('./webpack.config');

// console.log(`pwd:${process.cwd()}`)
// console.log(" --------->process.argv:",process.argv)
// console.log(" \n argv:",argv);

function handleConfig(config) {

    let localConfig = Object.create(config);
    // let localConfig = config;
    let toString = Object.prototype.toString;
	let hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=true';
	let entry = localConfig.entry;

    localConfig.plugins.push( new webpack.HotModuleReplacementPlugin());

    localConfig.devtool = 'cheap-module-eval-source-map' // ++

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
	// quiet:true,
	path: '/__webpack_hmr', 
	heartbeat: 10 * 1000
}));


//设置静态资源文件的根目录为 dist，静态资源都是从dist中读取
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(process.cwd() + '/dist')); //ok

// Do anything you like with the rest of your express application.

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + '/demo/index.html');
});


app.get("/test", function(req, res) {
  res.sendFile(process.cwd() + '/demo/test.html');
});


if (require.main === module) {
  var server = http.createServer(app);

  // console.log("process.env.PORT," process.env.npm_package_config_port:",process.env.npm_package_config_port);
  server.listen(process.env.npm_package_config_port || argv.port || 8888, function() {
    console.log("Listening on %j", server.address());
  });
}