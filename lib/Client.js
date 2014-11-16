/**
* Created by dotfold on 16/11/14.
*/
///<reference path="./../typings/rx/rx.d.ts" />
///<reference path="./../typings/rx/rx.async.d.ts" />
//import rx = require('rx');
var Client;
(function (_Client) {
    (function (HTTPMethod) {
        HTTPMethod[HTTPMethod["GET"] = 0] = "GET";
        HTTPMethod[HTTPMethod["POST"] = 1] = "POST";
        HTTPMethod[HTTPMethod["DELETE"] = 2] = "DELETE";
    })(_Client.HTTPMethod || (_Client.HTTPMethod = {}));
    var HTTPMethod = _Client.HTTPMethod;

    var Client = (function () {
        function Client(url) {
            this.url = url;
            this.baseUrl = url;
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
            xhr.open('GET', resource, true);
            return xhr;
        };
        return Client;
    })();
    _Client.Client = Client;
})(Client || (Client = {}));
//# sourceMappingURL=Client.js.map
