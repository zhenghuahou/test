console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function() {
    console.log('promise1')
  })
  .then(function() {
    console.log('promise2')
  })

console.log('script end')


//script start  --> async2 end --> Promise --> script end --> async1 end -->promise1 ---> promise2 --> setTimeout



// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
// })
// console.log(2)

//1 --> 2 --> 3 --> 4






// setTimeout(_ => console.log(4))

// new Promise(resolve => {
//   resolve()
//   console.log(1)
// }).then(_ => {
//   console.log(3)
//   Promise.resolve().then(_ => {
//     console.log('before timeout')
//   }).then(_ => {
//     Promise.resolve().then(_ => {
//       console.log('also before timeout')
//     })
//   })
// })

// console.log(2)
//1 --> 2 --> 3 --> before timeout --> also before timeout -->4





// console.log('click start') // 直接输出
// Promise.resolve().then(_ => console.log('promise')) // 注册微任务
// setTimeout(_ => console.log('timeout')) // 注册宏任务
// console.log('click end') // 直接输出
// click start --> click end --> promise -->timeout





console.log('Message no. 1: Sync',+new Date);
setTimeout(function() {
   console.log('Message no. 2: setTimeout',+new Date);
}, 0);
var promise = new Promise(function(resolve, reject) {
    console.warn('同步代码',+new Date)
   resolve();
});
promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise',+new Date);
})
.then(function(resolve) {
   console.log('Message no. 4: 2nd Promise',+new Date);
});
console.log('Message no. 5: Sync',+new Date);

//Message no. 1: Sync
//同步代码
//Message no. 5: Sync
//Message no. 3: 1st Promise'
//Message no. 4: 2nd Promise
//Message no. 2: setTimeout