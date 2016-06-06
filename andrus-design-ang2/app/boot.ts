import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [ROUTER_PROVIDERS]);

//as with ROUTER_PROVIDERS, include HTTP_PROVIDERS here instead of individuallly in the component modules