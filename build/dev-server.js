"use strict";

const http = require("http");
const path = require("path");
const webpack = require("webpack");
const express = require("express");
const webpackDevMiddleWare = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const argv = require("yargs").argv;
let webpackConfig = require("./webpack.config");

function handleConfig(config) {
  let localConfig = Object.create(config);
  // let localConfig = config;
  let toString = Object.prototype.toString;
  let hotMiddlewareScript =
    "webpack-hot-middleware/client?timeout=20000&reload=true&noInfo=true";
  let entry = localConfig.entry;

  localConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

  localConfig.devtool = "#cheap-module-eval-source-map"; // ++
  // localConfig.devtool = '#cheap-module-source-map' // ++

  for (let key in entry) {
    let item = entry[key];

    if (toString.call(item) === "[object Array]") {
      item.unshift(hotMiddlewareScript);
    } else {
      entry[key] = [hotMiddlewareScript, item];
    }
  }

  return localConfig;
}

webpackConfig = handleConfig(webpackConfig);

const compiler = webpack(webpackConfig);

const app = express();

// Step 2: Attach the dev middleware to the compiler & the server
app.use(
  webpackDevMiddleWare(compiler, {
    noInfo: true,
    stats: {
      colors: true
    },
    publicPath: webpackConfig.output.publicPath
  })
);

// Step 3: Attach the hot middleware to the compiler & the server
app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    // quiet:true,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
  })
);

//设置静态资源文件的根目录为 dist，静态资源都是从dist中读取
// app.use(express.static(path.join(__dirname, '../')));
// app.use("/dist",express.static(path.join(__dirname, '../dist')));
// app.use(express.static(process.cwd() + '/dist')); //ok

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/demo/index.html");
});

const fReg = /\w+\.\w+$/;
app.get("/demo/:file(*)", function(req, res) {
  const { params = {} } = req;
  const { file } = params;
  const fileSep = file.split(path.sep);
  let lastPath = fileSep[fileSep.length - 1];
  const hasSuffix = fReg.test(lastPath);
  if (!hasSuffix) {
    lastPath = `${lastPath}.html`;
  }
  fileSep[fileSep.length - 1] = lastPath;
  const filePath = `${process.cwd()}/demo/${fileSep.join(path.sep)}`;
  res.sendFile(filePath);
});

const server = http.createServer(app);
server.listen(
  process.env.npm_package_config_port || argv.port || 8888,
  function() {
    console.log("Listening on %j", server.address());
  }
);
