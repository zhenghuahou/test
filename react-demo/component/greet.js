var Greet = React.createClass({
        getInitialState: function() {
        	console.info(typeof this," getInitialState--->this",this)
          return {enable: false};
        },
        render: function() {
        	console.log(' render--->this:',this);
        	return null
            // return <h1>Hello {this.props.name}</h1>;
        }
      });



var InputState = React.createClass({
        getInitialState: function() {
        	console.info(typeof this," getInitialState--->this",this);
        	this.timer = setInterval(function () {
        		console.error(1)
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
              opacity = 1.0;
            }
            this.setState({
              opacity: opacity
            });
          }.bind(this), 7000);
          	return {enable: false,opacity:0};
        },
        componentWillMount(){
        	//调用一次
        	console.warn(" componentWillMount------>",arguments);

        },
         componentDidMount(){
         	//调用一次
        	console.warn(" componentDidMount------>",arguments)
        },
         componentWillUpdate(){
         	//多次调用
        	console.warn(" componentWillUpdate------>",arguments)
        },
         componentDidUpdate(){
         	//多次调用
        	console.warn(" componentDidUpdate------>",arguments)
        },
         componentWillUnmount(){
        	console.warn(" componentWillUnmount------>",arguments)
        },
         // componentDidMount: function () {
          // this.timer = setInterval(function () {
          //   var opacity = this.state.opacity;
          //   opacity -= .05;
          //   if (opacity < 0.1) {
          //     opacity = 1.0;
          //   }
          //   this.setState({
          //     opacity: opacity
          //   });
          // }.bind(this), 100);
        // },

        handleClick: function(event) {
        	// this.state.enable = !this.state.enable;//不触发render
        	console.info(this," \n -000000----------->this.state.enable:",this.state.enable);
            //当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件
            this.setState({enable: !this.state.enable});
        	console.info(this," \n -111111----------->this.state.enable:",this.state.enable);

        },
        render: function() {
         	console.info(' render函数--->this:',this," this.state.enable:",this.state.enable); 
	        return (
	            <p>
	               <input style={{opacity:this.state.opacity}} type="text" disabled={this.state.enable} />
	               <button onClick={this.handleClick}>Change State</button>
	            </p>
	        );
        }
      });


// export default Greet
export default InputState