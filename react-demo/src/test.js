// import Greet from '../component/greet.js'
import InputState from '../component/InputState.js'

console.warn('InputState-->',InputState);

var names = ['Jack', 'Tom', 'Alice','aa'];
var arr = [
        <h1>Hello world!</h1>,
        <h2>React is perfect!</h2>,
      ];

// console.warn(" ReactDOM:",ReactDOM,"\n React:",React);

names.map(function(){
  // console.info(React," arg:",arguments);
});

// var Greet = React.createClass({
//         render: function() {
//           return <h1>Hello {this.props.name}</h1>;
//         }
//       });

      ReactDOM.render(
        <div className='agcd' > 
          { /* <InputState name="JackH" data-cusm={names}/> */ }
           <InputState  /* 多
         行
         注释 */ name="JackH" data-cusm={names}/> 
          <p>11</p>
          <ul>
            <li>123</li>
            <li>456</li>
          </ul>
        </div>,
        document.getElementById('container')
      );

      //    ReactDOM.render(
      //   <InputState name="JackH" data-cusm={"names"} />,
      //   document.getElementById('container')
      // );


// ReactDOM.render(
//   <div className='aa'>
//   {
//     names.map(function (name,index) {
//       return  <a>*{arr}*</a>
//       return <div data={index+1} key={"Item-"+index}>Hello, {name}!</div>
//     })
//   }
//   </div>,
//   document.getElementById('container')
// );
