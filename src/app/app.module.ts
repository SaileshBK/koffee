import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HotKoffeeComponent } from './hot-koffee/hot-koffee.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './nav-bar/gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './nav-bar/about/about.component';
import { ProductsComponent } from './nav-bar/products/products.component';
import { ContactComponent } from './nav-bar/contact/contact.component';
import { HomeComponent } from './nav-bar/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HotKoffeeComponent,
    FooterComponent,
    NavBarComponent,
    GalleryComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'nav-bar/home', component: HomeComponent },
      { path: 'nav-bar/gallery', component: GalleryComponent },
      { path: 'nav-bar/about', component: AboutComponent },
      { path: 'nav-bar/products', component: ProductsComponent },
      { path: 'nav-bar/contact', component: ContactComponent },
    ]),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 1000,
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  exports: [HotKoffeeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
