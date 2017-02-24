/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/

var path = require("path");
var loaderUtils = require("loader-utils");
var mime = require("mime");
module.exports = function(content) {
    console.log(' this:',this);
   //console.info(' this。options',this.options);
    console.log(' resource:',this.__proto__.resource);
    this.cacheable && this.cacheable();
    var query = loaderUtils.parseQuery(this.query);
    var limit = (this.options && this.options.url && this.options.url.dataUrlLimit) || 0;
    
    var resource = this.__proto__.resource;

    var noBase =   resource && path.parse(resource).ext.includes('nobase');

    if(query.limit) {
        limit = parseInt(query.limit, 10);
    }

    // console.warn('query:',query,'noBase:',noBase,' limit:',limit,' content.length:',content.length);
    console.warn('query:',query,'result:',!noBase && (limit <= 0 || content.length < limit));

    var mimetype = query.mimetype || query.minetype || mime.lookup(this.resourcePath);
    if(!noBase && (limit <= 0 || content.length < limit)) {
         console.info('++++++++++++url-loader+++++++++++')
        return "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64"));
    } else {
         console.info('++++++++++++file-loader+++++++++++')
        var fileLoader = require("file-loader");
        return fileLoader.call(this, content);
    }
}

module.exports.raw = true;