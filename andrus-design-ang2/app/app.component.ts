import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AlbumsComponent} from './albums/albums.component';
import {AlbumComponent} from './album/album.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {ProjectDetailComponent} from './work/project-detail/project-detail.component';
import {WorkComponent} from './work/work.component';

@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/albums',
		name: 'Albums',
		component: AlbumsComponent,
		// useAsDefault: true
	},
	{
		path: '/album/:id',
		name: 'Album',
		component: AlbumComponent
	},	
	{
		path: '/contact',
		name: 'Contact',
		component: ContactComponent
	},
	{
		path: '/news',
		name: 'News',
		component: NewsComponent
	},
	{
		path: '/work',
		name: 'Work',
		component: WorkComponent
	},
	{
		path: '/work/:id',
		name: 'Project',
		component: ProjectDetailComponent
	},
	{
		path: '/*other',
		name: 'Other',
		redirectTo: ['Home']
	}
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, ProjectDetailComponent]
})

export class AppComponent {
	brand = "Andrus Design";
}
