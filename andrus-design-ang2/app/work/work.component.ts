/* Use container components like this one to access services and data and then pass that data along
    to re-usable components or UI components through inputs and outputs in the child components. 
    For example in this case there would be an item list component that would be used instead of 
    the ul in the template with the list being populated by a listItem component which would also 
    link to an itemDetail component. This way you can reuse the item components for other pages that 
    require the same type of layout. These are stored in the shared folder, where as anything not reusable 
    will be stored in either the parent folder or its own high level folder. */
import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Item} from '../shared/item'
import {ItemService} from '../shared/item.service';
import {ProjectListComponent} from './project-list/project-list.component';


@Component({
    template: `        
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>         
        <div>
            <project-list
            [item-array]="projects" 
            [route-name]="routeName">
            </project-list>       
        </div>
    `,
    directives: [ProjectListComponent],
    providers: [HTTP_PROVIDERS, ItemService]
})
export class WorkComponent implements OnInit {
    
    isLoading = true;    
    projects: Item[];
    routeName = "Project";            // route path base for individual item link
    
    constructor(private _itemService: ItemService) {
    }

    ngOnInit() {
        this._itemService.getWork()
            .subscribe(projects => {
                this.isLoading = false;
                this.projects = projects;
            });
    }
} 