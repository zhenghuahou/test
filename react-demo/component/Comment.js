// tutorial10.js

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var CommentList = React.createClass({
   getInitialState: function() {
         console.log(" getInitialState",this);
         return null
  },
  render: function() {
    var commentNodes = data.map(function(comment,index) {
      return (
        <p data-author={comment.author}  key={index}>
          {comment.author} ---> {comment.text}
        </p>
      );
    });

    console.log('commentNodes--->',commentNodes);
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});




// var CommentList = React.createClass({
//   render: function() {
//     var commentNodes = data.map(function(comment) {
//       return (
//         <div data-aut={comment.author} key={comment.id}>
//           {comment.text}
//         </div>
//       );
//     });

//     console.log('commentNodes--->',commentNodes);
//     return (
//       <div className="commentList">
//         {commentNodes}
//       </div>
//     );
//   }
// });

export default CommentList



