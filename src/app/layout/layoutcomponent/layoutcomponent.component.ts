import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layoutcomponent',
  templateUrl: './layoutcomponent.component.html',
  styleUrls: ['./layoutcomponent.component.scss'],
  imports: [NgClass, SideBarComponent, NavBarComponent,RouterOutlet,NgClass]
})
export class LayoutcomponentComponent implements OnInit{

  constructor(){}

  ngOnInit() {}

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
