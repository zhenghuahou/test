const startCallback = Date.now();
while (Date.now() - startCallback < 10000) {
  // 什么也不做
  // console.warn(2);
}

console.warn('aaa-->',111)

// export var a = 1;

async function foo(){ console.warn(113331,this)} //window
async function *foo2(){ console.warn('bb2',this)} //window

var bb = foo();
var bb2 = foo2();
