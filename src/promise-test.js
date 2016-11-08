import promis from "./lib/promis";
import * as aa from "./lib/co";
import {co} from "./lib/co";
import {wrap,test,getUsefulContents} from "./lib/co";
import Vue from "Vue";

window.aa = aa;
console.info(" aa:",aa);
console.info(" co1:",co);
console.info(" wrap:",wrap," test:",test," getUsefulContents:",getUsefulContents);
 


// console.log("promis:",promis,Vue);
// window.tt = promis.resolve(45).then(function(){
// 	console.info("&&&&&&&&&&",arguments)
// });
