/*1:
-------------------------------------------
-------------------------------------------
*/






// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   setTimeout(function(){
//   	    console.log('resolve 时机-------------->');
//   		resolve("2 测试 resolve 时机"); 
//   },0)
//   // resolve("ssss"," 第二个参数"); //a 处
//   // resolve(["ssss"," 第二个参数"]); //b 处
// });


// setTimeout(function(){
// 	console.info("  setTimeout:");
// },0)


// promise.then(function(aa,bb) {
// 	//只能接受到，a处resove传递过来的第一个参数，如果要传递多个参数，可以组装成数组传递
//   console.log('promise.then--->aa:',aa," bb:",bb);
//   //对应上面的a处输出结果: promise.then--->aa: ssss  bb: undefined
//   //对应上面的b处输出结果: promise.then--->aa: ["ssss", " 第二个参数"]  bb: undefined
//   // fn("demo2");
// });

// console.log('Hi!');

/*
Promise
Hi!
resolve 时机-------------->
promise.then--->aa: 2 前面 测试 resolve 时机  bb: undefined
setTimeout:
*/



/*1.1
-------------------------------------------
-------------------------------------------
*/



// setTimeout(function(){
// 	console.info("  setTimeout:");
// },0)


// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   setTimeout(function(){
//   	    console.log('resolve 时机-------------->');
//   		resolve("2 测试 resolve 时机"); 
//   },0)
//   // resolve("ssss"," 第二个参数"); //a 处
//   // resolve(["ssss"," 第二个参数"]); //b 处
// });



// promise.then(function(aa,bb) {
// 	//只能接受到，a处resove传递过来的第一个参数，如果要传递多个参数，可以组装成数组传递
//   console.log('promise.then--->aa:',aa," bb:",bb);
//   //对应上面的a处输出结果: promise.then--->aa: ssss  bb: undefined
//   //对应上面的b处输出结果: promise.then--->aa: ["ssss", " 第二个参数"]  bb: undefined
//   // fn("demo2");
// });

// console.log('Hi!');


/*

Promise
Hi!
setTimeout:
resolve 时机-------------->
promise.then--->aa: 2 测试 resolve 时机  bb: undefined

*/




/*2:
-------------------------------------------
-------------------------------------------
*/

// var promise2 = new Promise(function(resolve, reject) {
//   reject();
// });


// var pp = promise2.then(function(){
// 	console.log(1,arguments);
// }).then(function(){
// 	console.log(2,arguments);
// }).then(function(){
// 	console.log(3,arguments);
// }).then(function(){})




/*3:
-------------------------------------------
-------------------------------------------
*/

// var promise3 = new Promise(function(resolve, reject) {
//  	setTimeout(function(){
//  		resolve();
//  	},2000)
// });

// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// var p2 = new Promise(function (resolve, reject) {
// 	console.info(" p1:",p1); //立即输出
//   setTimeout(() => resolve(p1), 1000)
//   // setTimeout(() => resolve(123), 0)
// })

// p2
//   .then(result => console.info("result:",result))
//   .catch(error => console.info("error:",error)) //3s后输出




/*4:
-------------------------------------------
-------------------------------------------
*/

// var promise3 = new Promise(function(resolve, reject) {
//  	setTimeout(function(){
//  		resolve();
//  	},2000)
// });

// var p1 = new Promise(function (resolve, reject) {
//   // setTimeout(() => reject(new Error('fail')), 3000)
//   setTimeout(() => resolve('resolve **fail**'), 3000)
// })

// var p2 = new Promise(function (resolve, reject) {
// 	console.info(" p1:",p1); //立即输出
//   // setTimeout(() => resolve(p1), 1000)
//   setTimeout(function(){
//   	return resolve(p1);
//   },1000)
//   // setTimeout(() => resolve(123), 0)
// })

// p2
//   .then(result => console.info("result:",result))
//   .catch(error => console.info("error:",error)) //3s后输出



/*4:
-------------------------------------------
-------------------------------------------
*/

// var p = new Promise(function(resolve){resolve("canshu 传递给then")});
// p .then((val) => console.log("1---->fulfilled:", val) || 23)
//   .then((val2) => console.log("2--->fulfilled:", val))
//   // .then(null, (err) => console.info("rejected:", err));
//   .catch((err) => console.log("rejected:", err));


/*5:
-------------------------------------------
-------------------------------------------
*/
// var promise = new Promise(function(resolve, reject) {
//   try {
//     throw new Error('test');
//   } catch(e) {
//     reject(e);
//   }
// });
// promise.catch(function(error) {
//   console.info(" error:",error);
// });


// 写法二
// var promise2 = new Promise(function(resolve, reject) {
//   reject(new Error('test promise2'));
// });
// promise2.catch(function(error) {
//   console.info("&&&&&&&&:",error);
// });


// var promise3 = new Promise(function(resolve, reject) {
//   resolve('ok');
//   throw new Error('test');
// });
// promise3
//   .then(function(value) { console.log("value:",value) })
//   .then(function(value) { console.log("1111:",arguments) })
//   .then(function(value) { console.log("2222:",arguments) })
//   .catch(function(error) { console.log("------->",error) });


// var someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   console.log('everything is great');
// });



/*6:
-------------------------------------------
-------------------------------------------
*/
// var promise = new Promise(function(resolve, reject) {
//   resolve("ok");
//   // setTimeout(function() { throw new Error(' 000 test') }, 0)
//   throw new Error(' 000 test') 
// });
// promise.then(function(value) { console.log(" 00 value:",value) });


// var promise2 = new Promise(function(resolve, reject) {
//   resolve('ok');
//   // throw new Error('test');
//   setTimeout(function() { throw new Error(' 111 test') }, 0)
// });
// promise2
//   .then(function(value) { console.log(" value 11:",value) })
//   .catch(function(error) { console.log("error 11:",error) });


/*7:
-------------------------------------------
-------------------------------------------
*/

// var someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     resolve(1 + 2);
//   });
// };

// someAsyncThing().then(function() {
//   return 23;
// }).catch(function(error) {
//   console.log('oh no', error);
//   // 上面没有保存,所以这个catch不会执行
//   y + 2;
// }).then(function() {
//   console.log('carry on',arguments); //carry on [23]
// });

/*8:
-------------------------------------------
-------------------------------------------
*/


// var someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   return someOtherAsyncThing();
// }).catch(function(error) {
//   console.log('oh no', error); //oh no ReferenceError: x is not defined(…)
//   // 下面一行会报错，因为y没有声明
//   y + 2;
// }).then(function() {
//   console.log('carry on');
// },function(){
// 	console.info(" arguments:",arguments)
// });


/*9:
-------------------------------------------
-------------------------------------------
*/

var getPromise = function(flag,ms) {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    console.log(" flag:",flag);

    if(flag){
    	setTimeout(function(){
    		return resolve([1,ms],"ceshi");
    	},ms)
    }else{
    	setTimeout(function(){
    		 reject([2,ms]);
    	},ms)
    }
  });
};


// Promise.race( [getPromise(false,8000),getPromise(false,2000),getPromise(true,5000)] ).then(function (posts) {
// 	console.log(" ********** then 的第一个回调:",posts);
// 	return 22;
// },function(posts){
// 	console.log(" ********** then 的第二个回调:",posts);
// 	return 23;
// }).then(function(){
// 	console.log(" ++++++++++",arguments);
// })
// .catch(function(reason){
//   console.log(" reason:",reason);
// });


/*10:
-------------------------------------------
-------------------------------------------
*/


// var p = Promise.race([
//   getPromise(false,2001.23),
//   new Promise(function (resolve, reject) {
//   	console.log("11111111");
//     setTimeout(() => reject(new Error('request timeout')), 5000)
//   })
// ])

// // p.then(response => console.log(" then response:",response))

// var tt = p.then(error => console.log(" arg1:",error) || 22)
// .then(error => console.log(" arg2:",error) || 24)
// .then(error => console.log(" arg3:",error))
// .catch(error => console.log("catch error:",error))



/*11:
-------------------------------------------
-------------------------------------------
*/


// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve("ssss"," 第二个参数"); //a 处
//   // resolve(["ssss"," 第二个参数"]); //b 处
// });


/*上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
Promise.resolve()在本轮“事件循环”结束时执行，console.log(’one‘)则是立即执行，因此最先输出。
*/
// setTimeout(function(){
// 	console.info("  setTimeout:");
// },0)


// Promise.reject(['foo',"bb",23],23).then(function(aa,bb) {
// 	//只能接受到，resove传递过来的第一个参数，如果要传递多个参数，可以组装成数组传递
//   console.log('promise.then--->aa:',aa," bb:",bb);
// },function(data){
// 	console.warn(" 2:",data1) //报错 promise.js:324 Uncaught (in promise) ReferenceError: data1 is not defined(…)
// });


// Promise.reject(['foo',"bb",23],23).then(function(aa,bb) {
// 	//只能接受到，resove传递过来的第一个参数，如果要传递多个参数，可以组装成数组传递
//   console.log('promise.then--->aa:',aa," bb:",bb);
// },function(data){
// 	// console.warn(" 2:",data1)
// 	console.log("error")
// }).catch(function(data){
// 	console.warn(" 3:")
// 	console.warn(" 4:",data3) //catch 不会执行，所以不会保存
// });

// console.log('Hi!');

/*
Hi!
promise.then--->aa: ["foo", "bb", 23]  bb: undefined
setTimeout:
*/






// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   setTimeout(function(){
//   	    console.log('resolve 时机-------------->');
//   		resolve("2 测试 resolve 时机"); 
//   },0)
// });


// let thenable = {
//   then: function(resolve, reject) {
//   	console.log(" 自定义 then")
//     resolve(42);
//   }
// };



// var aabbcc = Promise.reject(thenable).then(function(aa,bb) {
// 	//只能接受到，a处resove传递过来的第一个参数，如果要传递多个参数，可以组装成数组传递
//   console.log('promise.then--->aa:',aa," bb:",bb);
//   //对应上面的a处输出结果: promise.then--->aa: ssss  bb: undefined
//   //对应上面的b处输出结果: promise.then--->aa: ["ssss", " 第二个参数"]  bb: undefined
//   // fn("demo2");
// },function(data){
// 	console.log('then 的第二个参数 promise.then--->data:',data);
// });




/*12.1:
-------------------------------------------
-------------------------------------------
*/


// setTimeout(function(){
// 	console.info("  setTimeout:");
// },0)

// let thenable = {
//   then: function(resolve, reject) {
//   	console.log(" resolve的自定义方法");

//   	setTimeout(function(){
//     	resolve(42);
//   	},2000);

//   }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(" value:",value);  // 2s后输出：value: 42
// },function(data){
//   console.log("then的第二个参数 value:",data);  // 2s后输出：value: 42
// });

// console.log('Hi!');

/*
Hi!
resolve的自定义方法
setTimeout:
value: 42 //2s后输出
*/




/*12.2:
-------------------------------------------
-------------------------------------------
*/

// setTimeout(function(){
// 	console.info("  setTimeout:");
// },0)

// let thenable = {
//   then: function(resolve, reject) {
//   	console.log(" resolve的自定义方法");

//   	setTimeout(function(){
//     	reject(43);
//   	},2000);

//   }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(" value:",value);  // 2s后输出：value: 42
// },function(data){
//   console.log("then的第二个参数 value:",data);  // 2s后输出：value: 42
// });

// console.log('Hi!');

/*
Hi!
resolve的自定义方法
setTimeout:
then的第二个参数 value: 43 //2s后输出

*/




/*12.3:
-------------------------------------------
-------------------------------------------
*/

// setTimeout(function(){
// 	console.info("  setTimeout:");
// },0)

// let thenable = {
//   then: function(resolve, reject) {
//   	console.log(" resolve的自定义方法"); //不会执行

//   	setTimeout(function(){
//     	resolve(44);
//   	},2000);

//   }
// };

// let p1 = Promise.reject(thenable); //p1的状态是rejected,不会调用thenable.then方法，和Promise.resolve不一样
// var pp = p1.then(function(value) {
//   console.log(" value:",value);  //value 为 thenable
// },function(data){
//   console.log("then的第二个参数 value:",data); 
//   // return "data"+ JSON.stringify(data)
//   return "data"+ data
// }).then(function(){
// 	console.log(" 第二个then",arguments);
// });

// console.log('Hi!');

/*
Hi!
resolve的自定义方法
setTimeout:
then的第二个参数 value: 43 //2s后输出

*/



/*13:
-------------------------------------------
-------------------------------------------
*/

// Promise.prototype.done = function (onFulfilled, onRejected) {

// 	console.info(" this:",this," \n -->onFulfilled:",onFulfilled,"\n -->onRejected:",onRejected);
//    return  this.then(onFulfilled, onRejected)
//     .catch(function (reason) {
//        console.info(" done --->catch:",reason); 
//       // 抛出一个全局错误
//       setTimeout(() => { throw " haha --->"+reason }, 3000); 
//       // return getPromise(false,0) //c处 
//       //不加上面的return tt2的状态是resolved
//       //如果加上上面的return 则会返回一个rejected状态的promise,所以tt2的状态rejected

//     });

// };


// Promise.prototype.finally = function (callback) {
//   let P = this.constructor;

//   console.log(" P:",P, P===Promise," callback:",callback);
//   return this.then(
//     value  => P.resolve(callback()).then(() => value),
//     reason => P.resolve(callback()).then(() => { throw reason })
//   );
//   //上面的return 一个promise,下面的tt2才能支持链式操作
// };

// window.time1 = Date.now();
// var tt = getPromise(false,2000) //rejected

//  var tt2 = tt.then(function(data){
//  	console.log(" data:",data)
//  },function(data){
//  	window.time2 = Date.now();
//  	console.log("00 data:",data," time2-time1:",time2-time1);
//  	// return getPromise(false,3000)
//  	return getPromise(false,3000)
//  }).then(function(data){
//  	window.time3 = Date.now();
//  	console.log("0000 ",data," time3-time2::",time3-time2," time2-time1:",time2-time1);
//  },function(data){
//  	window.time31 = Date.now();
//  	console.log("else 0000 ",data," time31-time2::",time31-time2," time2-time1:",time2-time1);
//  	return getPromise(false,0) //google 下rejected 状态的promise就会抛出一个未捕获的异常
//  })
//   .done(function(){
//   	console.log(" ######## onFulfilled",arguments1)
//   },function(){
//   	console.warn(" done 的第二个参数");
//   	console.log(" ######## onRejected:",arguments1)
//   })
  // .finally(function(){
  // 	console.info(" &&&&&&&&&&:",arguments);
  // });



/*13:
-------------------------------------------
-------------------------------------------
*/


// console.log(" promise:",require);

let promise = new Promise(function(resolve, reject) {
  console.log('Promise',resolve,reject);
  setTimeout(function(){
       console.log('resolve 时机-------------->');
     resolve(); 
  },2000)
  reject("ssss"," 第二个参数"); //a 处
  // resolve(["ssss"," 第二个参数"]); //b 处
});

let pp = promise.then(function(){
  console.log("001 第二个then:",arguments)
},function(){
  console.log("002 第二个then:",arguments)
})














//  function asyncFunc() {
//  		console.log(" asyncFunc");
//         return new Promise((resolve, reject) => {
//         	console.log(" 11 asyncFunc");
//             setTimeout(() => resolve('DONE'), 5000);
//         });
//     }
// async function main() {
// 	console.time("Adding && result");
//      window.x =  asyncFunc(); // (A)
//     console.log('Result: ',x);
// 	console.timeEnd("Adding && result");

//     // Same as:
//     // asyncFunc()
//     // .then(x => console.log('Result: '+x));
// }
// main();






