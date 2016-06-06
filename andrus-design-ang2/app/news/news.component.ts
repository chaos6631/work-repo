import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Item} from '../shared/item'
import {ItemService} from '../shared/item.service';
import {ItemListComponent} from '../shared/item-list.component';

@Component({
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>         
        <div>
            <item-list
            [item-array]="news" 
            [route-name]="routeName">
            </item-list>       
        </div>
    `,
    directives: [ItemListComponent],
    providers: [HTTP_PROVIDERS, ItemService]
})
export class NewsComponent implements OnInit {
    isLoading = true;    
    news: Item[];
    routeName = "Article"

    constructor(private _itemService: ItemService) {
    }

    ngOnInit() {
        this._itemService.getNews()
            .subscribe(news => {
                this.isLoading = false;
                this.news = news;
            });
    }
}
