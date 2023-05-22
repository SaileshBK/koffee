import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './nav-bar/gallery/gallery.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { ProductsComponent } from './nav-bar/products/products.component';
import { ContactComponent } from './nav-bar/contact/contact.component';

const routes: Routes = [
  { path: '', component: AppComponent },
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
