# Server-side scaffolding

Create a server-side folder, cd into the folder and install node packages - `npm init -y`

Then install project and dev dependencies
`npm install --save-dev @babel/core @babel/node babel/cli babel/preset-env babel-preset-stage-0 && npm install express nodemon cors dotenv body-parser mongoose helmet express-rate-limit`

[Babel Documentation - main](https://babeljs.io/docs/en/)
[Documentation for node](https://babeljs.io/docs/en/babel-node)
[Deprecations](https://babeljs.io/docs/en/v7-migration)

Create presets file touch `.babelrc` file - transpiles into CommonJS from ES6 - for node modules

```
{
  "presets": ["env", "stage-0"]
}
```

In `package.json` set up scripts, I have changed the entry from `index.js` to `server.js` to identify the server from other index files.

```
"scripts": {
    "start": "nodemon ./server.js --exec babel-node -e js",
    "debug": "DEBUG=express:* nodemon ./server.js --exec babel-node -e js"
  },
```

Create environment file touch `.env` file
In put your test file in`DB_CONNECTION=mongodb+srv://<username>:<password>@cluster0.iqhpj.mongodb.net/test`

Create a gitignore file touch `.gitignore` to ignore node files when you push to git repo copy the client-side `.gitignore` file and add `.env` to the files to ignore

**Server**
Set up Express `server.js` test home route working and app listening on home route

**Server-side security**
`npm install helmet` basic installation provides 11 HTTP middleware protection layers
[Documentation](helmetjs.github.io) and on [npm](https://www.npmjs.com/package/helmet)
`npm install express-rate-limit` protection against denial of service attacks - only 100 requests per IP in 15 minutes.

**MongoDB**
Add mongoDB connection test in `server.js` and test with real username and password in the .env file, add it below all server security imports just above the `app.listen()` method.

1. Create schemas for data-security, validation of types.
2. Move tested routes to controllers if you have created and tested them with hard-coded data, if not set up the api-controllers and test them with postman and import the validated data schema
3. Now import the controllers into the routes to configure the routes
4. Import the configured routes into the Express server
5. Test data persists with the post request
6. Now write the get request and see if you get the data in the browser

**PostMan**

Testing upvote routes with mock data hardcoded server-side, using the `request.params.name` method and assigning it to a variable `const articleName = req.params.name;`

```
http://localhost:5000/api-articles/rock-n-roll/upvote
http://localhost:5000/api-articles/k-pop/upvote
http://localhost:5000/api-articles/hip-hop/upvote

```

Testing add-comment routes with mock data in request body, destructuring the `req.body()` callback and assigning it to a variable `const { username, text } = req.body;`

```
http://localhost:5000/api-articles/rock-n-roll/add-comment
http://localhost:5000/api-articles/k-pop/add-comment
http://localhost:5000/api-articles/hip-hop/add-comment
```
