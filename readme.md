## Pool Temperature Monitor

Node.JS server to read and test temperature readings from a ds18b20 temperature sensor on a raspberry pi.

### Features
- Basic web server to show page
- Editable template in PUG
- No major libraries to install other than Node.JS
- No major configuring, if you have one sensor plugged in it just works
- Connects to ThingSpeak to track and monitor pool temps in real time on your cell phone

### Setup

To clone and run this application on your raspberry pi, you'll need GIT, and Node.JS. From the commandline run:

```
# Clone this repository
$ git clone https://github.com/jfreak53/pool-temp

# Go into the repository
$ cd pool-temp

# Install dependencies
$ npm install

# Start the file watcher
$ npm start
```

Alternatively you can use `nodemon` to auto restart the app on file change, like when you change the configuration settings:

```
$ nodemon index
```