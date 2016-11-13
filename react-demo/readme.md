1.用热加载并不会，并不会生成dist,所生成的js文件在内存中


2.ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('aa')
      );

等价于下面的写法=========

ReactDOM.render(React.createElement(
	  "h1",
	  null,
	  "Hello, world!"
	), document.getElementById('aa'));
