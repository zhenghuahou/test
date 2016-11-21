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

Search.Row = React.createClass({ 
     render: function() {
          console.info(" Search.Row 组件-->this:",this)
          return (
              <a htmlFor='a' className='ss'>{this.props.text}</a>
          );
        }

 });





var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


var Page = React.createClass({
  render: function() {
    console.info(" Page组件-->this:",this);
    return <div className="input">
         <h1>!!!elcome!</h1>
         <Search searchType="title" />
         <Search  searchType="content"  
         onClick={this.onClick}/>
         <Search.Row  text="Search.Row--->content" href='www'  for='dd' class='tt' className='rowns'/>
      </div>
    ;
  }
});

export default Page