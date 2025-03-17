import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class SideBarComponent implements OnInit {
  // Toggle flags for submenu visibility
  showProducts = false;
  showOrders = false;

  // Icon paths (adjust if necessary)
  burgerIcon = '../../../../assets/icon/burger-icon.png';
  product = '../../../../assets/icon/product-icon.png';
  dashboard = '../../../../assets/icon/dashboard.png';
  order = '../../../../assets/icon/purchase.png';

  constructor(private router: Router) {}

  ngOnInit() {}

  @Output() sidebarToggle = new EventEmitter<void>();

  onBurgerClick() {
    this.sidebarToggle.emit();
  }

  // Toggle products submenu
  toggleProducts() {
    this.showProducts = !this.showProducts;
  }

  // Toggle orders submenu
  toggleOrders() {
    this.showOrders = !this.showOrders;
  }

  // Navigation functions using the updated routes:

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToProductList() {
    this.router.navigate(['/productsList']);
  }

  goToAddProduct() {
    this.router.navigate(['/addProduct']);
  }

  goToOrderList() {
    this.router.navigate(['/ordersList']);
  }

  goToAddOrder() {
    this.router.navigate(['/addOrder']);
  }
}
