# Server-side scaffolding

Create a server-side folder, cd into the folder and install node packages - `npm init -y`

Then install project and dev dependencies
`npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/cli @babel/preset-stage-0 && npm install express nodemon cors dotenv body-parser mongoose helmet`

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

**MongoDB**
Add mongoDB connection test in `server.js` and test with real username and password in the `.env` file, add it below all server security imports just above the `app.listen()` method.

- Connect to MongoDB either directly in the cloud with the dot env file OR as a localhost - 27017 connection.
  NOTE: This is riddled with access challenges - The bug-fix I am following that is working on this project and the current MaC - REMOVING the temp socket -

```
sudo rm /tmp/mongodb-27017.sock
```

Then ensuring there are read-write access on the local file

```
sudo chmod -R a+wxr /data
```

Then only running `mongo` not `mongod`

**Mongoose as Midware**
Use Mongoose as an ORM for a further level of data-protection - I am running both MongoClient - direct access to the db and Mongoose to test the difference.
Mongoose methods research:

1. How to use the `.findByIdAndUpdate()` method - id is an object id, returns null or undefined - needs to be a string

- [https://kb.objectrocket.com/mongo-db/how-to-use-the-mongoose-findbyidandupdate-method-92]

- [https://stackoverflow.com/questions/47827392/mongoose-findbyid-returns-null-even-with-valid-id]

1. Create schemas for data-security, validation of types.

2. Controllers modules with functions that interact with the database. Requests to the API are sent to the database with a configured route. The controller executes the function in the database. You can start working on routes in the controllers directly, but can be difficult to test as you need to se up models and routes. Therefore, if you have tested routes with mocks or hard-coded data in the back-end with routes written directly on the server, refactor and move these functions to the controllers.

3. Now import the controllers into the routes to configure the routes. The controllers need to be connected to the configured routes so that when we're calling the route from the request, it executes the controller functions.

4. In the Express server, we only need to import the configured routes and use them.

```
const playerRoutes = require("./apis/api-config-routes/playerRoutes");
playerRoutes(app);
```

In the router create a variable that will hold the routes and then pass the app - the Express app method as an argument - as above. We import the variable and router files, use the app as an arg of the routes, the CRUD requests and responses will now work and connect with MongoDb without cluttering up the Express server. It also provides another layer of data-security.

5. Test data persists with the post request - this way you can seed your database

6. Now write the get request and see if you get the seeded data in the browser

7. You can also test the get data by unique Id, update with a put call and delete with a delete call in Postman and test that the data persists in the database

NOTE: If your compiler is not working - for some reason my babel compilers are not - you will need to use nodeJS import and export of modules, and require filepaths, libraries.

Setting up the localhost on the local machine:
To connect to your db in the mongo shell run mongo to get the local version up and running and listening. Then run mongo + the uri you have saved in your .env file
Once again if you are using a VPN you may have to check that the IP is added and whitelisted

**PostMan**

Testing upvote routes with mock data hardcoded server-side, using the `request.params.name` method and assigning it to a variable `const articleName = req.params.name;`

```
http://localhost:5000/api-content/rock-n-roll/upvote
http://localhost:5000/api-content/k-pop/upvote
http://localhost:5000/api-content/hip-hop/upvote

```

Testing add-comment routes with mock data in request body, destructuring the `req.body()` callback and assigning it to a variable `const { username, text } = req.body;`

```
http://localhost:5000/api-content/rock-n-roll/add-comment
http://localhost:5000/api-content/k-pop/add-comment
http://localhost:5000/api-content/hip-hop/add-comment
```

Routes for players with and Id generated from MongoDB - used to test find, update
http://localhost:5000/api-players/5f3c394dcf275808b5c1cf47
