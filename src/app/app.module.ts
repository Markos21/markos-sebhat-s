import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { FooterComponent } from '../footer/footer.component';
import { AddProductComponent } from '../add-product/add-product.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'addProduct', component: AddProductComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    ProductListComponent,
    AddProductComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
