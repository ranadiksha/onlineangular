import { Component } from '@angular/core';

@Component({
  // book
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: '<h1>Hello Angular..!</h1>', // view : UI
})
export class AppComponent {
  // data and logic
  title = ' Welcome to Angular..!';

  arr = ['himachal', 'punjab', 'mumbai'];

  mobParts = [
    {
      id: 1001,
      name: 'Screen 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
    },
    {
      id: 1002,
      name: 'Screen 5',
      description: '5 Screen for Samsung',
      inStock: 8,
    },
    {
      id: 1003,
      name: 'key panel',
      description: 'Key panel for Nokia',
      inStock: 0,
    },
  ];
}
