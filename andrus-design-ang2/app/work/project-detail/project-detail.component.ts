import {Component, Input, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

import {Item} from '../../shared/item';
import {ItemService} from '../../shared/item.service';
// import {IdFilterPipe} from '../../../pipes/idFilter.pipe'

@Component({
    selector: 'project-detail',
    template: `
        
        <h1>This is project detail for {{id}}</h1>        
            <h1>This is project detail for {{project.title}}</h1>
                
    `,
    providers: [ItemService, HTTP_PROVIDERS]
    
})
export class ProjectDetailComponent implements OnInit {
    projects: Item[];    
    project = new Item;    
    id = this._routeParams.get("id");


    constructor(private _itemService: ItemService,
        private _routeParams: RouteParams) {        
    }

    ngOnInit() {        
        this._itemService.getWork()
            .subscribe(projects => {                
                this.projects = projects;
            });    
        // this.project = this.projects.prototype.find(function(e) {
        //             return e.id === this.id;
        // });         
    }
}