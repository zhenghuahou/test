import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = [{
      filename: 'b.html',
      chunks:['common','test'],
      template: './demo/test.html'
    },{
      filename: 'a.html',
    }
];


function htmlPlugin(){
    const result = config.map((item,index,array)=>{
        return new HtmlWebpackPlugin(item) 
    });
    return result ;
}


// export const arr = [11] //导出为：{ arr: [ 11 ] }

export {config,htmlPlugin}
export default 1
