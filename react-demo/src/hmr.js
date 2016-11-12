// console.info(" 11 module:",module," module.hot:",module.hot);

/*
这个需要加,否则控制台会提示
否则热替换不生效
*/
if(module.hot) {
	console.clear();
	module.hot.accept(function(err) {
		if(err) {
			console.error("Cannot apply hot update", err);
		}
	});
}

require('./a.js');
require('./b.js');

console.info("hmr.js测试文件");
// aa.innerHTML='abc';