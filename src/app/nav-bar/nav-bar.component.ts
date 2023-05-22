import { Component, Output, EventEmitter, Renderer2 } from '@angular/core';
import { sideNavBarData } from './nav-bar-data';
import { Router, RouterLink } from '@angular/router';

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

  @Output() onToggleSideNav: EventEmitter<SideNavBarSettings> = new EventEmitter();
  screenWidth = 0;

  isOpen = false;
  collapsed = true;
  navData = sideNavBarData;
  isHovered: boolean = false;



  toggleCollapse(): void {
    if (this.isHovered) {
      this.collapsed = !this.collapsed;
      this.onToggleSideNav.emit({ screenWidth: this.screenWidth, collapsed: this.collapsed });
    }
  }

}
