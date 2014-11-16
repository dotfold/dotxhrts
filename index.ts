
import client = require('./lib/Client');

var c = new client.Client('http://api.movideo.com/rest/');
c.enqueueRequest(client.HTTPMethod.GET)
    .subscribe( res => {
        console.log('completed ', res);
    }, err => {
        console.log('error ', err);
    }, () => {
        console.log('completed');
    });
