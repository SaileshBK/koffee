import { Component } from '@angular/core';

interface SideNavBarSettings {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSideNavCollapsed = false;
  screenWidth = 1;
  onToggleSideNav(data: SideNavBarSettings): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }



}
