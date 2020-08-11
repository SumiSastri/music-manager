# scaffolding

Create a server-side folder

Install node packages - `npm init -y`

Then install project and dev dependencies
`npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env @babel-preset-stage-0 && npm install express nodemon cors dotenv body-parser mongoose`

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

**MongoDB**
Add mongoDB connection test in `server.js` and test with real username and password in the .env file

Create MongoDB data-model

**API routes**
