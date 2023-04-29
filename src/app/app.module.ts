import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotKoffeeComponent } from './hot-koffee/hot-koffee.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HotKoffeeComponent,
    FooterComponent,
    MainContentComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [HotKoffeeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
