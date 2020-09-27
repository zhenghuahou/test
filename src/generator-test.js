/*1:
-------------------------------------------
-------------------------------------------
*/

//rest参数
//参考网址：http://es6.ruanyifeng.com/#docs/function#rest参数
// function add(...values) {
// 	console.log("values:",values," arguments:",arguments," ...values:",...values);//values:[2,5,3]数组
//   let sum = 0;

//   for (var val of values) {
//     sum += val;
//   }

//   return sum;
// }

// add(2, 5, 3) // 10
// add(function(){}) // 10
// g[Symbol.iterator]() === g //true


// var Thunk = function(fn) {
// 	console.log(" fn:",fn," arguments:",arguments, " ...arguments:",...arguments)
//   return function (...args) {
//   	console.log(" 2  arg:",args,"  ...args:",...args, " ...arguments:",...arguments)
//   	// 2  arg: [1]   ...args: 1  ...arguments: 1
//     return function (callback) {
//     	console.log("  callback:",callback);
//     	// console.log/("  callback:",callback," arguments:",arguments,arguments[0] ===callback,arguments[1]);
//       return fn.call(this, ...args, callback);
//     }
//   };
// };

// var t = [1,2,5]
// var [head, ...tail] = [1, 2, 3, 4]

// function f(a, cb) {
// console.warn(" a :",a," cb:",cb) // a:1， cb:log函数
//   cb(a);
//   cb(a);
//   cb(a);
// }
// let ft = Thunk(f);

// let log = console.info.bind(console);
// ft(1)(log) // 1



/*3:
-------------------------------------------
-------------------------------------------
*/
function thunkify(fn){
	// console.log(" fn:",fn," arguments:",arguments);
  return function(){
    var args = new Array(arguments.length);
    var ctx = this;

    // console.log(" arguments:",arguments," args:",args);

    for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
    console.log(" args:",args)//[1,3]

    return function(done){
      var called;

      args.push(function(){
      	console.log(called," _______________done:",done," arguments:",arguments);
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};



// function f(a, b, callback){
//   var sum = a + b;
//   console.log(" ***********",a,b," callback:",callback," arguments:",arguments)
//   callback(sum);//下面的print回调方法只会调用1次
//   callback(sum);
//   callback(sum);
// }

// ft  = thunkify(f,"huz");
// var print = console.info.bind(console);
// var ftt = ft(10,3)
// ftt(print)



/*4:
-------------------------------------------
-------------------------------------------
*/

// function* helloWorldGenerator() {
// 	console.log(" hello ---->")
//   yield function(data){ setTimeout( function(){
// 		  	console.log(" 我爱你",data)
// 		  },2000);
// 		};
// 	console.log("world");
//   yield 'world';
//   console.log(" ending")
//   return 'ending';
// }

// var hw = helloWorldGenerator();




// function* f() {
//   for(var i=1; true; i++) {
//   	console.log(" ++++++++++++++++++++ i:",i);
//     var reset = yield i && console.warn(" yield ----------》i:",i) ||4;
//     console.log(" reset:",reset," i:",i);
//     if(reset) { i = -1;console.info(" i:",i) }
//   }
// }

// var g = f();

// console.info(" t1:");
// var t1 = g.next() 
// console.log(" t1:",t1);// { value: 4, done: false } //会把yield后面一整条语句执行完毕

// setTimeout(function(){
// 	console.log(" 计时器 t2:",2000)
// 	var t2 = g.next();
// 	console.log(" t2:",t2);
// },2000)



// console.info(" t3:");
// var t3 = g.next(34);
// console.log(" t3:",t3);


// console.info(" t4:");
// var t4 = g.next();
// console.log(" t4:",t4); // t4: Object {value: 4, done: false}




/*5:
-------------------------------------------
-------------------------------------------
*/

// function* foo(x) {
// 	console.log(" x:",x);
//   var y = console.info(" x:",x) && (2 * (yield (x + 1))); //这个yield一直不会被执行，因为前面的console为undefined,即为false
//   console.info(" y:",y)
//   var z = yield (y / 3) ;
//   console.info(" z:",z)
//   return (x + y + z);
// }


// var a = foo(5);

// var f1 = a.next();

// console.log(" f1:",f1);

// // console.warn("+++++++++++++++++++++++++++++++++")

// var f2 = a.next();

// console.log(" f2:",f2);


// var f3 = a.next();


// console.log(" f3:",f3);


//  Object.prototype.toString.call(a) //"[object Generator]"





var g = function* () {
  while (true) {
    yield;
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
















