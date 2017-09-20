import { Component } from '@angular/core';

/**
 * Generated class for the StudentsProjectsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'students-projects',
  templateUrl: 'students-projects.html'
})
export class StudentsProjectsComponent {

  text: string;

  constructor() {
    console.log('Hello StudentsProjectsComponent Component');
    this.text = 'Hello World';
  }

}
