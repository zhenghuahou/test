"use strict";
// let n = 10000;
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let count = (new Array(arr.length)).fill(0);

// console.time('a');    
// for (let i = 0; i < n; i ++) {
//     arr.sort(() => Math.random() - 0.5);
//     count[arr.indexOf('a')]++;
// }
// console.timeEnd('a');   
// console.log(count);


// function shuffle(arr) {
//     let new_arr = arr.map(i => ({v: i, r: Math.random()}));
//     new_arr.sort((a, b) => a.r - b.r);
//     arr.splice(0, arr.length, ...new_arr.map(i => i.v));
// }
 
// let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let n = 10000;
// let count = (new Array(a.length)).fill(0);
// console.time('b');   
// for (let i = 0; i < n; i ++) {
//     shuffle(a);
//     count[a.indexOf('a')]++;
// }
// console.timeEnd('b');
// console.log(count);



function shuffle(arr) {
    let t, j;
    let i = arr.length;
    while (i) {
        // let j = Math.floor(Math.random() * i--);
        // [arr[j], arr[i]] = [arr[i], arr[j]];
        
        j = Math.floor(Math.random() * i--);
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}

let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let n = 10000;
let count = (new Array(a.length)).fill(0);
console.time('c');   
for (let i = 0; i < n; i ++) {
    shuffle(a);
    count[a.indexOf('a')]++;
}
console.timeEnd('c');
console.log(count);