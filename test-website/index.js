
var StaticServer = require("static-server");
var server = new StaticServer({
    rootPath: __dirname + "/www",
    port: 3000,
    cors: "*",
    followSymlink: true
});

function start(port, cb) {
    server.port = port;
    server.start(function() {
        console.log("Server listening to", server.port);
        cb(server);
    });    
}

module.exports.start = start;

function stop() {
    server.stop();    
}

module.exports.stop = stop;
