import promis from "./lib/promis";
import Vue from "Vue";
 

// console.log("promis:",promis,Vue);
window.tt = promis.resolve(45).then(function(){
	console.info("&&&&&&&&&&",arguments)
});
