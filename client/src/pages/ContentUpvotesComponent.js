import React from "react";
import Button from "../common/Button";

const ContentUpvotesComponent = () => {
  return (
    <div id="upvotes-section">
      <p>This post has been upvoted x times</p>
      <Button>Click to upvote</Button>
    </div>
  );
};

export default ContentUpvotesComponent;
