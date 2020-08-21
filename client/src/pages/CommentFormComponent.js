import React, { useState } from "react";

//  we are deconstructing state from the comment list component and passing it into this parent controlled form component using hooks, we are rendering it in the values of the input, we are setting the value of the username to the value of the user input with the event.target.value() method, the event is an on change event.
const CommentFormComponent = ({}) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleUserNameChange = () => {
    setUsername(event.target.value);
  };
  const handleCommentTextUpdate = () => {
    setCommentText(event.target.value);
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          placeholder="type your name, mandatory field"
          value={username}
          onChange={handleUserNameChange}
        />
      </label>
      <label>
        Add new comment:
        <textarea
          rows="4"
          cols="50"
          placeholder="Add your comment here"
          value={commentText}
          onChange={handleCommentTextUpdate}
        />
      </label>
      <button>Click to add comment</button>
    </div>
  );
};

export default CommentFormComponent;
