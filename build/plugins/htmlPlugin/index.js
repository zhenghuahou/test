import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from "./config.json";

var obj = {"key1":"value1"};
function myFunction(x) {
    console.log('x :',x); // undefined
}


// console.log(' config:',config,' Object.values(config):',Object.values(config));

function htmlPlugin(){

    const result = Object.values(config).map((item,index,array)=>{
        return new HtmlWebpackPlugin(item) 
    });
    return result ;
}


function d(){
    // return (...htmlPlugin())
}

// var x =  htmlPlugin();
// export const arr = [11] //导出为：{ arr: [ 11 ] }

export {config,htmlPlugin}
export default 1
