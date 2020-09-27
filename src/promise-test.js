import promis from "./lib/promis";
import * as aa from "./lib/co";
import { co } from "./lib/co";
import { wrap, test, getUsefulContents } from "./lib/co";
import Vue from "Vue";

window.aa = aa;
console.info(" aa:", aa);
console.info(" co1:", co);
console.info(" wrap:", wrap, " test:", test, " getUsefulContents:", getUsefulContents);



// console.log("promis:",promis,Vue);
// console.log("Vue:",Vue);
// window.tt = promis.resolve(45);
// Passing null to a method or parameter accepting a DOMString typically stringifies to "null".


var a1 = performance.now();
var p1 = new Promise((resolve, reject) => {
    console.error('1', this, +new Date);
    setTimeout(function () {
        window.a1 = +new Date;
        resolve('hello');
    }, 5000)
})
    .then(result => (window.b = +new Daet, result + ' by huazi'))
    .catch(e => e);

var p2 = new Promise((resolve, reject) => {
    console.error('2', this, +new Date);
    setTimeout(reject, 2000)
})
    .then(result => {
        console.error(' result:', result);
        return result
    })
    .catch(e => 'p2');

Promise.all([p1, p2])
    .then(result => console.log('then:', result, performance.now()))
    .catch(e => console.log('catch:', e));



// window.tt = promis.resolve(45).then(function(){
// 	console.info("&&&&&&&&&&",arguments)
// });
