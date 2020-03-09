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