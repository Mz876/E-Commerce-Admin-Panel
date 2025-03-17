import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [IonicModule, NgIf],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  lightMode = '../../../../assets/icon/sun.png';

  @Input() isSidebarOpen: boolean = true;
  @Output() toggleSidebar = new EventEmitter<void>();

  isDarkMode = false;

  // In your component class
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    // Update document class or localStorage as needed
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
