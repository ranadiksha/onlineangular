import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = ' Welcome to Angular..!';

  arr = ['himachal', 'punjab', 'mumbai'];

  mobParts = [
    {
      id: 1001,
      name: 'Screen 5.5',
      description: '5.5 Screen for Moto g',
      inStock: 5,
      prodColor: 'brown',
      canPurch: true,
      country: 'Australia',
      price: 1200,
    },
    {
      id: 1002,
      name: 'Screen 5',
      description: '5 Screen for Samsung',
      inStock: 8,
      prodColor: 'green',
      canPurch: false,
      country: 'India',
      price: 1200,
    },
    {
      id: 1003,
      name: 'key panel',
      description: 'Key panel for Nokia',
      inStock: 0,
      prodColor: 'red',
      canPurch: false,
      country: 'Germany',
      price: 1200,
    },
  ];
}
