/**
* Created by dotfold on 16/11/14.
*/
///<reference path="./../typings/rx/rx.d.ts" />
///<reference path="./../typings/rx/rx.async.d.ts" />
//import rx = require('rx');
//module Client
//{
var Client = (function () {
    function Client(baseUrl) {
        this.baseUrl = baseUrl;
    }
    Client.prototype.enqueueRequest = function (method) {
        var req = this.createRequest('session');
        var error = Rx.Observable.fromEvent(req, 'error');
        var done = Rx.Observable.fromEvent(req, 'load');

        return Rx.Observable.create(function (observer) {
            error.subscribe(function (err) {
                observer.onError(err);
            });

            done.subscribe(function (res) {
                console.log('doned');
                observer.onNext(res);
                observer.onCompleted();
            });
        });
    };

    Client.prototype.createRequest = function (resource) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + resource, true);
        return xhr;
    };
    return Client;
})();
exports.Client = Client;

(function (HTTPMethod) {
    HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
    HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
    HTTPMethod[HTTPMethod["DELETE"] = 2] = "DELETE";
})(exports.HTTPMethod || (exports.HTTPMethod = {}));
var HTTPMethod = exports.HTTPMethod;
;
//}
//# sourceMappingURL=Client.js.map
