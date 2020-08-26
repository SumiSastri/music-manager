import React from "react";
// we are getting comments passed down as a prop from the Article Page component, the prop takes the articleInfo.comments from the useState setting of state to articleInfo in the ArticlePage - this is the parent and child is the Article page
const CommentsList = ({ comments }) => (
  <>
    <h3>Comment List:</h3>
    {comments.map((comment, key) => (
      <div className="comment" key={key}>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);

export default CommentsList;
