import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Item} from './item';

@Injectable()
export class ItemService {
    
    private _workUrl = "/api/work.json";
    private _newsUrl = "/api/news.json";

    constructor(private _http: Http) {}

    getWork() {
        return this._http.get(this._workUrl)
                   .map(res => res.json());
                     
    }
    getProject(id: any){       
        return this._http.get(this._workUrl)
                   .map(res => res.json());

    }
    getNews() {
        return this._http.get(this._newsUrl)
            .map(res => res.json());
    }
    
}