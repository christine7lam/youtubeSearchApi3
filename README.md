## Setup

### Prerequisite

* You must have Node.js and npm installed
* You must have git installed
* If you are on Windows you must restart your computer after you install Node.js

***

### Build (Client)

To build this project you must first clone the `youtubeSearchApi3` repository:

> `git clone https://github.com/christine7lam/youtubeSearchApi3.git`

Next, change directory to the root of the project and download dependencies with NPM:

> `npm install`

It is recommended that you install the gulp client globally:

> `npm install -g gulp-cli`

Now you can build the project:

> `gulp build`

This will create a build directory with a document root file (index.html) as well as the associated JavaScript and CSS files; this process will also set up a watch on your files and rebuild the appropriate parts of your project when changes occur.

** For Mac, use SUDO when needed**

***

### Run (Server)

To run this project, you should use `npm` with the scripts defined in `package.json`:

> `npm start`

You can now navigate to [localhost on port 8080](http://localhost:8080) to view the running web interface.

***

### Run Defaults

The UI uses the following defaults:

* environment: local
* port: 8080

To override the defaults you should set the following environmental variables in accordance with your platform:

* NODE_ENV
* PORT

***

