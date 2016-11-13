require("./hmr");

// var React = require('react');


/*
这个需要加,否则控制台会提示
main.bundle.js:8347 [HMR] The following modules couldn't be hot updated:
 (They would need a full reload!)(入口文件文件才会有这个提示)
*/

// }
if(module.hot) {
	console.clear();
    module.hot.accept();
}

// var ReactDOM = require('react-dom');
console.log(" ReactDOM:",ReactDOM);
console.log(" React:",React);

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('aa')
  );


