import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { SimplestyleDirective } from './directives/simplestyle.directive';
import { BooksComponent } from './product/books/books.component';
import { LaptopsComponent } from './product/laptops/laptops.component';
import { MobPartsComponent } from './product/mob-parts/mob-parts.component';
import { PensComponent } from './product/pens/pens.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    SqrtPipe,
    SimplestyleDirective,
    BooksComponent,
    LaptopsComponent,
    MobPartsComponent,
    PensComponent,
  ],
  imports: [BrowserModule], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}
