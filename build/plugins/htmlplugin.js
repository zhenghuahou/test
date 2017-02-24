var HtmlWebpackPlugin = require("html-webpack-plugin");

const config = [{
      filename: 'index.html',
      chunks:['common','test'],
      template: './demo/index.html'
    }
];


function htmlPlugin(){
    const result = config.map((item,index,array)=>{
        return new HtmlWebpackPlugin(item) 
    });
    return result ;
}



export {config,htmlPlugin}
// export default {}

