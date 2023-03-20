import { Component, Output, EventEmitter, Renderer2 } from '@angular/core';
import { sideNavBarData } from './nav-bar-data';

interface SideNavBarSettings {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() onToggleSideNav : EventEmitter<SideNavBarSettings> = new EventEmitter();
  screenWidth = 0;

  isOpen = false;
  collapsed = true;
  navData = sideNavBarData;


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
  }

  closeSideNav(): void {
    this.isOpen = false;
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
  }



}
