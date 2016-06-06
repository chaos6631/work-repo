import {Component, Input, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import {Item} from '../../shared/item';
import {ItemService} from '../../shared/item.service';

@Component({
    selector: 'article-detail',
    template: `
        
        <h1>This is article detail</h1>
    `,
    providers: [ItemService, HTTP_PROVIDERS]
})
export class ArticleDetailComponent implements OnInit {
    // news: Item[];
    
    // @Input('article') article = Item;

    constructor(private _itemService: ItemService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {        
            // this._itemService.getWork()
            //     .subscribe(news => {
            //         this.isLoading = false;
            //         this.news = news;
            //     });
    }
}