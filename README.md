# music-manager

MERN-stack app

# project-objectives

To revise the MERN stack

**What is the MEAN-MERN stack?**
A stack is a collection of technologies used to run an app. The MEAN stack and MERN stack are an end-to-end javascript collection of technologies used to build apps using the Mongo database and mongoose.js/ express.js as a runner, angular.js or react.js for the front-end ui-ux and node.js to connect the Mongo database to the front-end libraries.

The MEAN/MERN stack are a network of applications based on javascript that communicate through the network front-end - midware - backend fluidly. It is often a preferred option for start-ups as fewer language specialisations are required in the dev team.

The advantages of MEAN/ MERN- (Mongo-Express-Angular (or React)-Node) stack with javascript read: [https://www.toptal.com/javascript/guide-to-full-stack-javascript-initjs] The stack has a robust architecture for small apps, and comes inbuilt with Jestfor unit testing, if you are using React. The article suggests using gulp for automated build tasks and brackets for full text coding. Server side componentization often done with Docker can be achieved with express.js or connect.js.

# scaffolding

- git clone

- npx create-react-app client and install all other libraries detailed in the front-end `README.md` documentation
- npm init -y and install all other dev dependencies detailed in the back-end `README.md` documentation

- start scripts `npm run start` client localhost:3000 server localhost:5000
- or `nodemon` in watch mode server-side

Experimentation:

I wanted to revise async await, the Fetch Api, React Hooks, Progressive Web Apps and see if I could get them all to work with MongoDB and server-side security.

Challenges:

MongoDB set up in the local machine was not stable, compared to the cloud based version. To get mongo to run locally, I had to debug several times.
The steps to move my mongo-directory in this de-bug blog were the most useful
[https://stackoverflow.com/questions/12831939/couldnt-connect-to-server-127-0-0-127017]
