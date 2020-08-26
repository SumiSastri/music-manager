This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
`npx create-react-app`

## Front-end dependencies

`npm install --save whatwg-fetch react-router-dom`
Add materialise CSS to links to `index.html` file

```
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
```

and JavaScript to the file above the body closing tag.

` <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`
Website and docs[https://material-ui.com/]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Client-side notes

**The match.params() method**

- Props of the Router component - are the `match()` method
- We can pass the match prop which will match the routes in the URL to parts of the URL string
  `const name = match.params.name;` or if you want to match the id it will be `match.params.id` and you can assign it to a variable with a suitable name.
- ArticlePage component now has access to the value of the URL parameter and can make changes to itself accordingly - display these url changes

```
const ArticlePage = ({ match }) => {
  const name = match.params.name;
  return (
    <div>
      <h1>This is a {name} article</h1>
    </div>
  );
};
export default ArticlePage;
```

Hard-code data in an array of objects and test that it works

```
import ArticleContentData from "./ArticleContentData";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  <!-- find data from hard-coded, front-end data using array find method -->
  const article = ArticleContentData.find((article) => article.name === name);

  return (
    <div>
    <!-- display the data from the array find method in the jsx -->
      <h1>{article.title}</h1>
    </div>
  );
};
export default ArticlePage;

```

Now you can map and filter data and use other array methods in the component.

**Using props with the Link HOC**

```
import { Link } from "react-router-dom";

import ArticleContentData from "./ArticleContentData";

const ArticlesList = () => (
  <>
    <h1>Music Blogs</h1>
    {ArticleContentData.map((article, key) => (
      <!-- when mapping use the key in the Link HOC, and then you can dynamically create the URL with the article name -->
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article.name}`}
      >
        <h3>{article.title}</h3>
        <!-- The prop article.content is an array of paragraphs, so you can extract the first paragraph, chain the substring method to get 150 characters of the article -->
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
```

**Using Switch and 404**

Switch matches routes exactly, the 404 should be at the end as it will show always if it is on the top.

**Using Fetch API and Internet Explorer**

Fetch is inbuilt but for Internet explorer needs the package `whatwg-fetch`, it is a polfill and to make this work on Internet Explorer import it in `index.js` above the react imports `import "whatwg-fetch"`

**Using React-Hooks**

Instead of class components, we are using the `useState` for local data storage and `useEffect` for back-end API calls.

The two stateful components are the main ArticlePage - state is then destructured and passed as props to parent components. The parent components use state to set functions and the components are rendered with their props in the child component. The child component in the props references state and the props to render.
