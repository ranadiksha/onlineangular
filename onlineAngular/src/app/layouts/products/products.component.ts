import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="container">
      <div class="section">
        <!--   Icon Section   -->
        <div class="row">
          <!-- Start : row -->

          <!-- Empty the 'row' div -->

          <h1>{{ title }}</h1>

          <ul>
            <li *ngFor="let mobPart of mobParts">
              <p>
                Mobile Part Id: <b>{{ mobPart.id }}</b>
              </p>
              <div [style.color]="mobPart.prodColor">
                Mobile Part Name:
                <b
                  ><i>{{ mobPart.name }}</i></b
                >
              </div>
              <div>
                Description: <q>{{ mobPart.description }}</q>
              </div>

              <ng-container
                *ngIf="mobPart.inStock != 0; then stockVal; else outOfStock"
              >
              </ng-container>

              <ng-template #stockVal>
                Last <mark>{{ mobPart.inStock }}</mark> Parts Available in stock
                now...
              </ng-template>

              <ng-template #outOfStock>
                Out Of Stock
              </ng-template>

              <div
                [ngStyle]="{
                  display: mobPart.canPurch === true ? 'inline-block' : 'none'
                }"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Green_sphere.svg/2000px-Green_sphere.svg.png"
                  width="16"
                />
              </div>

              <!-- ng-container  vs  ng-template -->

              <div *ngIf="mobPart.inStock > 0; else outOfStock">
                Last <mark>{{ mobPart.inStock }}</mark> Parts Available in stock
                now...
              </div>

              <!-- #id : templatevarible - ->
              <ng-template #outOfStock>
                Out of stock..!
              </ng-template> -->

              <!-- <div *ngIf="mobPart.inStock === 0">
                Out Of Stock Now...
              </div> -->
            </li>
          </ul>

          <!-- End : row -->
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
