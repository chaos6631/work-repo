import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
// import {PhotoService} from '../shared/photo.service';

@Component({
    templateUrl: '/app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})
export class HomeComponent implements OnInit {
    isLoading = true;
    // albums;

    constructor() {
    }

    ngOnInit() {
        // this._photoService.getAlbums()
        //     .subscribe(albums => {
        //         this.isLoading = false;
        //         this.albums = albums;
        //     });
    }
}