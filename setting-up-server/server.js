//  requiring the #net module
var net = require('net');

// create a server
var server = net.createServer(function (conectionListener) {
    console.log('connected');

    //  get the configured address for the server
    console.log(this.address());

    // get connection takes callbackfunction
    this.getConnections(function (err, count) {
        if (err) {
            console.log("Error getting connections");
        } else {
            console.log(`Connections count: ${count}`);
        }
    });

    connectionListener.on('end', function () {
        console.log('disconnected');
    });
    // write to connected socket
    connectionListener.write('heyyo\r\n');
});

server.on('error', function (err) {
    console.log(`Server error: ${err}`)
});

server.on('data', function (data) {
    console.log(data.toString());
})

/**
 * listen()
 */
server.listen(8181, function () {
    console.log(`server is listening`);
})

