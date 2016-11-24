// require("./hmr");
require("./test");

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.info(" z:",z);
//x; // 1
//y; // 2
//z; // { a: 3, b: 4 }



var Search = React.createClass({
        render: function() {
          console.info(" Search 组件-->this:",this)
          return (
            <div>
               {this.props.searchType}:<input type="text" />
               <button> {this.props.searchType}</button>
            </div>
          );
        }
      });

class Contacts extends React.Component {  
  constructor(props) {
    super(props);
    console.info("main.js constructor--->++++++");
     this.handleClick();
    // this.handleClick = this.handleClick.bind(this);

  }
  
  handleClick() {
    console.log(" handleClick--->",this); // React Component instance
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>handleClick</div>
    );
  }
}

var tt = new Contacts();
console.info("main.js tt------->",tt);
console.info("main.js Search:",Search,"\n Contacts:",Contacts);

/*
这个需要加,否则控制台会提示
main.bundle.js:8347 [HMR] The following modules couldn't be hot updated:
 (They would need a full reload!)(入口文件文件才会有这个提示)
*/

// }
if(module.hot) {
	// console.clear();
    module.hot.accept();
}



      ReactDOM.render(
        <div className='main' > 
          <Contacts   /* <InputState name="JackH" data-cusm={names}/> */  />
        </div>,
        document.getElementById('container')
      );

// ReactDOM.render(
//     <h1>Hello, world</h1>,
//     document.getElementById('aa')
//   );






