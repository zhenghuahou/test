// async function f() {
//   return 'hello world';
// }

// var rest = f();
// console.log(' rest:',rest);
// var dd = rest.then(v => (console.log(v),1))

async function f() {
    window.t1 = +new Date;
    await 123;
//      try {
//     await Promise.reject('出错了 && Promise.reject');
//      }catch(err){
//          console.log('xxx',err);
//      }
    await Promise.reject('出错了 && Promise.reject').catch(function(){
         console.log('catch 函数 arguments:',arguments);
     });
    await Promise.resolve('hello world'); // 上面加了catch捕获,会接着执行,如果不加try/catch或catch,zhe
    console.log('++++++++++');
    await new Promise(function(resolve, reject) {
      console.log('Promise');
//       throw new Error('出错了');// 会被 '1处' 的捕获到
      
      setTimeout(function(){
            console.log('resolve 时机-------------->');
            resolve("resolve data"); 
      },2000)
    });

    await new Promise(function(resolve, reject) {
      console.log('Promise');
      setTimeout(function(){
            console.log('reject 时机-------------->');
            reject("reject data 测试"); 
      },6000)
    });

    await setTimeout(function(){console.info('async',arguments)},2000);
    return ['a'];
}

var rest = f();

var dd = rest.then(
  v => {
      console.log('v--->:',v);
      window.t2 = +new Date;
   },
  e => { //1处
      console.log('e--->:',e);
     return window.t2 = +new Date;
  }
)