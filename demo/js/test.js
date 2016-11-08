/*1:
-------------------------------------------
-------------------------------------------
*/



// let promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//       console.log('promise 1:',2000);
//        resolve(2000);
//   },2000)
// });


// let promise2 = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//        console.log('promise 2:',4000);
//        reject(4000);
//   },4000)
// });


// var gen = function* (){
//   var f1 = yield promise1
//   var f2 = yield promise2
//   console.log("f1:",f1.toString());
//   console.log(" f2:",f2.toString());
// };


// var tt = co(gen).then(function (){
//   console.log('Generator 函数执行完成');
// },function(resolve,reject){
//   console.log('Generator 函数执行完成但是有异常',arguments);
//   return Promise.reject(["Y"]);
// })

// .catch(function(){
//   console.warn(" arguments:",arguments);
// })







/*2:
-------------------------------------------
-------------------------------------------
*/


// function* sleep() {
//   return new Promise(function(resolve) {
   
//     console.info(" sleep:");

//     setTimeout(resolve, 12000);
//   });
// }


// temp = [];
// co(function*() {
//   console.log("++++++++++++++++++++++++++++++++++++++");

//   for(var i = 0; i<3; ++i) {
//        console.log(" <--------------------i:",i)
//       // console.time("a");
//       temp.push(yield sleep());
//       // console.timeEnd("a");

//     // if (i % 10 === 0) {
//       // global.gc();
//       // console.log(process.memoryUsage());
//       // heapdump.writeSnapshot();
//       console.log(" ------------------------>i:",i)
//     // }

//   }

// }).then(function() {
//   console.log('finished')
// }, function(err) {
//   console.log('caught error: ', err.stack);
// });





// function getPromise(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }


var timer = null;

var getPromise = function(flag,ms) {
  return new Promise(function(resolve, reject) {
    if(flag){
      timer = setTimeout(function(){
        return resolve(["timer:"+timer,ms],"ceshi");
      },ms)
    }else{
      timer = setTimeout(function(){
         reject(["timer:"+timer,ms]);
      },ms)
    }

  });
};






var log = function(){
  return console.log.apply(this,arguments)
}



function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}


/*1:
test with a generator function
-------------------------------------------
-------------------------------------------
*/
// var demo1 = co(function *(){
//   console.info(" 1111")
//   // yield any promise
//   var result = yield getPromise(true,4000)
//   console.info(" 2222")
// }).then(function(){
//   console.info(" demo1------>",arguments)
// }).catch(onerror);




// co(function *(num, str, arr, obj, fun){
//       log(num === 42);
//       log(str === 'forty-two');
//       log(arr[0] === 42);
//       log(obj.value === 42);
//       log(fun(),fun instanceof Function)
//     }, 42, 'forty-two', [42], { value: 42 }, function () {console.info(" info:",arguments)}
//   );






// co(function* () {
//       try {
//         yield null;
//         // throw new Error('lol');
//       } catch (err) {
//         log(err instanceof TypeError);
//         log(~err.message.indexOf('You may only yield'));
//       }
//     })




co(1);



/*2:
test with a generator function
-------------------------------------------
-------------------------------------------
*/
// var fn2 = co.wrap(function* (val) {
//   console.warn(" 你好：：：",val)
//   // yield 2;
//   return yield new Promise(function(resolve,reject){
//      // setTimeout(() => resolve("demo "+ val),4000)
//      console.info(" 测试%%%%%%%%%%%%")
//       setTimeout(function(){
//         resolve(44);
//       },2000);
//   });
// });

// var demo = fn2(true);
// var result = demo.then(function (val) {
//   console.info("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",val," this:",this===window);
// });








// function sleep(ms) {
//   return function(done){
//     console.info(" done:",done," ms:",ms)
//     setTimeout(done, ms);
//   }
// }

// function *work() {
//   console.info(" work",arguments);
//   yield sleep(50);
//   return 'yay';
// }

//  tt = co(function *(){
//   var a = yield work;log(" a:",a);
//   // var b = yield work;log(" b:",b);
//   var c = yield work;log(" c:",c);

//   log('yay' == a);
//   // log('yay' == b);
//   log('yay' == c);

//   var res = yield [work, work, work];
//   console.info(" res:",res)
// }).then(function (argument) {
//   console.log(" ___________________")
// });

//  co(function *(){
//   yield function *(){
//     throw new Error('boom');
//   };
// }).then(function () {
//   throw new Error('wtf')
// }, function (err) {
//   assert(err);
//   assert(err.message == 'boom');
// });
   



//  co(function *(){
//       var foo = {
//         name: { first: 'tobi' },
//         age: 2
//       };

//       var res = yield foo;
//       var result = yield getPromise(false,2000);

//       log(" res:",res);
//       log(" result:",result);
//       log('tobi', res.name.first);
//       log(2, res.age);
//       log(foo.now, res.now);
//       log(false, foo.falsey);
//       log(null, foo.nully);
//       log(undefined, foo.undefiney);
//     }
// );








