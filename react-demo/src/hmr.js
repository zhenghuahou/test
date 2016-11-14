// console.info(" 11 module:",module," module.hot:",module.hot);

/*
这个需要加,否则控制台会提示
否则热替换不生效
*/
// if(module.hot) {
// 	console.clear();
// 	module.hot.accept(function(err) {
// 		if(err) {
// 			console.error("Cannot apply hot update", err);
// 		}
// 	});
// }

if(module.hot) {
	// console.clear();
    module.hot.accept();
}

// require('./a.js');


// require('./b.js');

import dlt,* as bb from './b.js';
console.info(dlt,bb.default === dlt," 导出bb:",bb);
//bb.default === dlt //===>true
bb.default();

console.info("hmr.js测试文件");
aa.innerHTML='hmr';