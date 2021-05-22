# MERN Typescript Template
MERN Typescript Template Application that has both a server and client folder.

Template is pre-setup with Material-UI and stripped of most things from create-react-app for the UI so you can start working immediately without having to trim off anything.

---
## Getting Started:
note: replace <your-new-app-name> with the actual name of your new application
~~~~
> git clone https://github.com/tr3ysmith/mern_template.git <your-new-app-name>
> git remote rm origin
> yarn
> cd client
> yarn install
> cd ../
> yarn run dev
~~~~
This will install all dependencies in the main folder (server-side, and the client folder) and then running dev script will start react-scripts and the server with a proxy. The server runs with nodemon, but filtered only for the server folder (excluding client) and the react-scripts has hotreload already setup. So everything should properly restart as needed upon changes.

Be sure to add a new remote repository if you plan to push your project up to Cloud Source Control like Github
 ~~~
 > git remote add origin <remote-repo-url>
 > git push --set-upstream origin main
 ~~~

### Main Libraries:

React, Redux, Material-UI, Axios, Socket.IO, CLSX

----

## Production:
The server process has already been written to look for a /build folder in the root directory if the NodeJS env variable 'production' is found. So when building your react client side code, simply place the react build folder in the root and set the environment variable for production, and you're good to go!

For static files, the server will look for a /static folder in the root directory to serve any static files out of. This can be for stuff like images or additional css and js.

---
## Included Dependencies:




### **Server-Side**
 - axios
 - express
 - body-parser
 - cookie-parser
 - is-empty
 - socket.io
 - winston

 ### **Client-Side**
  - @material-ui/core
  - @material-ui/icons
  - axios
  - clsx
  - react
  - react-dom
  - react-redux
  - react-scripts
  - redux
  - redux-thunk
  - socket.io-client
