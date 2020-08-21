import React, { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";
// this article content is still hard-coded it can come from the back-end as well
import ArticleContentData from "./ArticleContentData";
import NotFoundPage from "../common/NotFoundPage";
import ContentUpvotesComponent from "./ContentUpvotesComponent";
import CommentsListComponent from "./CommentsListComponent";
import CommentFormComponent from "./CommentFormComponent";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find data from hard-coded, front-end data using array find method
  const article = ArticleContentData.find((article) => article.name === name);
  // only upvotes and comments have been placed in database
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  // uses fetchAPI only to get the upvotes and comments data
  useEffect(() => {
    const fetchData = async () => {
      // response from server
      const result = await fetch(`/api-content/${name}`);
      console.log(result);
      const body = await result.json();
      // set state to the response body of the api-call
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  if (!article) return <NotFoundPage />;

  // filter out other articles to link to this page that do not match the article.name prop
  // now in the ArticleList component reassign the prop articles to otherArticles variable created by the filter method -import the child component
  const otherArticles = ArticleContentData.filter(
    (article) => article.name !== name
  );
  // now that data is fetched create parent-child components, the parent components hold the functions, this is the child component - it renders from the parent - the two components are the content-upvotes-component,the comments-list-component as well as the controlled form component for the user to add comments. Props are passed from the parent to the child and the child component's (this article page) job is to render state and props.
  return (
    <>
      <h1>{article.title}</h1>

      <ContentUpvotesComponent
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentFormComponent />
      <CommentsListComponent comments={articleInfo.comments} />
      <h3>Other Blogs:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
