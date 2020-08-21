import React, { useState } from "react";

//  we are deconstructing state from the comment list component and passing it into this parent controlled form component using hooks, we are rendering it in the values of the input, we are setting the value of the username to the value of the user input with the event.target.value() method, the event is an on change event. We are also using state from the Articles Page component for the use effect hook to get the article name and set the Article info to the user input in the post request body
const CommentFormComponent = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  // Use FetchAPI to post updated changes to DB via API post endpoint

  // the first arg of the fetch is the path, the callback is the post method as an object - this is fetch api syntax - will vary with Axios and other HTTP runners. The fetch is the request, the call back is the response with the response body stringifying the data (a JSON method) to be passed in the request body, here it is the updated username and the comment text - we also need to specify the header language for the fetch api, as it is json it is sent in a json object - the C & T have to be upper case and hypenated, there is a comma at the end of the JSON object. There is a lot of boiler plate with the Fetch API. Once you have set the headers, you also need to specify what goes into the response body in detail. This has to be written in an await block before the async function body closes.
  const addComment = async () => {
    const result = await fetch(`/api-content/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };
  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleCommentTextUpdate = (event) => {
    setCommentText(event.target.value);
  };
  // To render this parent components JSX functions, we need to go to the child component, the Article page and add the props   <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} /> and add the onClick handler which is the addComment function
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
      <button onClick={() => addComment()}>Click to add comment</button>
    </div>
  );
};

export default CommentFormComponent;
