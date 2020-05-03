import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styles: []
})
export class TestimonialsComponent implements OnInit {

  yearsOfExperience = 13;

  constructor() { }

  ngOnInit() {
    this.yearsOfExperience = new Date().getFullYear() - 2007;
  }

}
