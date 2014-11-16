var client = require('./lib/Client');

var c = new client.Client('http://api.movideo.com/rest/');
c.enqueueRequest(0 /* GET */).subscribe(function (res) {
    console.log('completed ', res);
}, function (err) {
    console.log('error ', err);
}, function () {
    console.log('completed');
});
//# sourceMappingURL=index.js.map
