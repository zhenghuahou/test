console.log('sdb.js:---->---->');
aa.innerHTML='b.js修改html节点内容';

//import * from './a.js'; //语法报错
import * as aa from './a';//ok

export * from './a';//在输出a.js模块的所有属性很方法，但是不糊输出a.js模块的default方法
// console.info(" aa:",aa);


var x=1;

function g(){//作用域是函数定义的时候产生的
	console.log(" g-->x:",x);
	x="gg";
}


function f(){
	var x = "ff";
	g();//输出: g-->x: 1
	function b(){
		console.log(" b-->x:",x);
		x="bb";
	}
	b();//输出：bb-->x:ff
	console.info("f--> x:",x);//输出:f--> x: bb

}
f();
console.log(" 外面-------------->:",x);//x:"gg"


export default function bb(){
	console.info("a.js导出的内容:",aa)
}