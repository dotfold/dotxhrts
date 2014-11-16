/**
 * Created by dotfold on 16/11/14.
 */

///<reference path="./../typings/rx/rx.d.ts" />
///<reference path="./../typings/rx/rx.async.d.ts" />

export enum HTTPMethod { GET, POST, DELETE }

export class Client
{
    constructor (public baseUrl:string) {}

    enqueueRequest(method:HTTPMethod) : Rx.Observable<any>
    {

        var req:any = this.createRequest('session');
        var error = Rx.Observable.fromEvent(req, 'error');
        var done = Rx.Observable.fromEvent(req, 'load');

        return Rx.Observable.create(observer=> {

            error.subscribe((err) => { observer.onError(err) });

            done.subscribe((res) => {
                console.log('doned');
                observer.onNext(res);
                observer.onCompleted();
            })
        });
    }

    private createRequest(resource):XMLHttpRequest
    {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + resource, true);
        return xhr;
    }
}
