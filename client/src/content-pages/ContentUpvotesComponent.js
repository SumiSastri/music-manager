import React from "react";

// This is the parent component, so we take out the test <p>{articleInfo.upvotes}</p> from the articles page as we know the data is flowing and write the code here to pass the information dynamically by deconstructing state - setArticleInfo, the articleName and the upvotes - we now go back to the articles page and set these as props articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}
const ContentUpvotesComponent = ({ articleName, upvotes, setArticleInfo }) => {
  // fetch data from the server and post the response body to the articleinfo.upvotes - on click event
  const upvoteArticle = async () => {
    const result = await fetch(`/api-content/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div id="upvotes-section">
      <p>This post has been upvoted {upvotes} times</p>
      <button onClick={() => upvoteArticle()}>Click to upvote</button>
    </div>
  );
};

export default ContentUpvotesComponent;
