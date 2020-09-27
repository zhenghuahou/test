var _ = require('lodash');
var webpack = require('webpack');


function ExtendedDefinePlugin(definitions) {
    var clonedDefinitions = _.cloneDeep(definitions);
    return new webpack.DefinePlugin(deepJsonStringify(clonedDefinitions));
}

function deepJsonStringify(definitions) {
	console.info(' definitions----->',definitions);
    return _.each(definitions, function (val, key) {
    	console.info(val,' _.isString(val):', _.isString(val));
        definitions[key] = _.isString(val) ?
            JSON.stringify(val) :
            deepJsonStringify(definitions[key]);
    });
}

module.exports = ExtendedDefinePlugin;
