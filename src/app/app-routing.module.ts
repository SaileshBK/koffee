import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './nav-bar/gallery/gallery.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { ProductsComponent } from './nav-bar/products/products.component';
import { ContactComponent } from './nav-bar/contact/contact.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HomeComponent } from './nav-bar/home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '**', redirectTo: '/gallery' } // fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
