var _ = require('lodash');



if(aa.bb.huazi=='huazi'){
	console.info('huazi!!! 我是test');
}



if (DESCRIPTION) {
	// console.log('cb:',cb,typeof cb,eval(cb));
    console.log('DESCRIPTION--->',DESCRIPTION,typeof DESCRIPTION);
    console.log('TWO--->',TWO,typeof TWO);
    console.log('SOME_BOOLEAN--->',SOME_BOOLEAN,typeof  SOME_BOOLEAN);
    console.log('aa.bb--->',aa.bb,aa.bb.huazi);
}

console.log('process.env.NODE_ENV:',process.env);
/* new webpack.DefinePlugin({
          'process.env': {
             NODE_ENV: 'production'
          });

console.log('process.env.NODE_ENV:',process.env);
上面的console语句webpack编译之后为：===>console.log('process.env.NODE_ENV:', ({"NODE_ENV":production}));
*/  


/*
new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
})

console.log('process.env.NODE_ENV:',process.env);
上面的console语句webpack编译之后为：===>console.log('process.env.NODE_ENV:', ({"NODE_ENV":"production"})
*/       
