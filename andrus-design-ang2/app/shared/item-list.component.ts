import {Component, Input, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Item} from '../shared/item';

@Component({
    selector: 'item-list',
    template: ` 
        <div class="col-xs-12 content-box-gallery" id="projects">
            <div *ngFor="#item of items" class="col-xs-12 col-sm-5 content-box-gallery-item" >
                <a><img class="img-responsive" src="{{item.image_ref}}" /></a>
                <a><h3>{{item.title}}</h3></a>
                <h6>{{item.category}}</h6>
            </div>    
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: []
})
export class ItemListComponent implements OnInit {    
    @Input('item-array') items: Item [];
    @Input('route-name') routeName: string;
    /* NEED TO FIGURE OUT HOW TO ADD THE routeName value to the routerLink, 
       BELOW EXAMPLE DOESNT WORK, HANDLEBARS SET OFF AN ERROR */
    // [routerLink] = "['{{routeName}}', { id: item.id }]"

    
    // constructor(private _itemService: ItemService) {
    // }

    ngOnInit() {
        
    }
}
