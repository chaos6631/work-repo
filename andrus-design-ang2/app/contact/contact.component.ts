import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';
/* Need a form that takes users contact information and then
  allows them to send a message directly to us through a textbox*/

@Component({
    templateUrl: '/app/contact/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
	constructor(private _router: Router){}
  
  onSubmit(form){
      console.log(form);
      this._router.navigate(['Albums']); // On form submit, app will redirect to Albums page
  }

  routerCanDeactivate(next, previous){
		// if(this.form.dirty) { // enable confirm dialogue box }
		return confirm("Are you sure?");
  }
}