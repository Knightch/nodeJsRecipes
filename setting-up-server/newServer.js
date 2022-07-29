var net = require('net');

// create connection
var connection = net.createConnection({
    port: 8181,
    host: '127.0.0.1'
}, function () {
    console.log('connection successfull!');
});

// extracting createConnection Arguments
function normalizeConnectArgs(args) {
    var options = {};

    if (typeof args[0] === 'object') {
        // connect(options,[cb]);
        options = args[0]
    } else if (isPipeName(args[0])) {
        // connect(path, [cb]);
        options.path = args[0];
    } else {
        // connect(port,[host],[cb])
        options.port = args[0];
        if (typeof args[1] === 'string') {
            options.host = args[1];
        }
    }

    var cb = args[args.length - 1];
    return (typeof cb === 'function') ? [options, cb] : [options]
}