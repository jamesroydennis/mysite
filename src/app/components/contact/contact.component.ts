import { Component, OnInit } from '@angular/core';
import { ContactForm } from './contact-form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [`
    .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }
    
    .ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
  `]
})


export class ContactComponent implements OnInit {

  // name: string;
  // email: string;
  // message: string;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {

    
  }

  model = new ContactForm('','','');

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.submitted = true;
    alert('Thank you for your feedback');
  }

}
