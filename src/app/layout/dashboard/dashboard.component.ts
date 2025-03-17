import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../../shared/components/side-bar/side-bar.component";
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { IonicModule } from '@ionic/angular';
import { StatCardComponent } from "../../components/stat-card/stat-card.component";
import type { Order } from 'src/app/interfaces/order.interface';
import type { Product } from 'src/app/interfaces/product.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    SideBarComponent,
    NavBarComponent,
    IonicModule,
    StatCardComponent,
    CommonModule,
  ],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  orderCount: number = 42; // Replace with real data
  productCount: number = 150;
  userCount: number = 25;

  ngOnInit() {}

  latestProducts: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      sku: 'PRD-001',
      image: '../../../../assets/images/google-logo.png',
      category: 'Electronics',
      price: 149.99,
      status: 'In Stock',
      addedDate: new Date(),
    },
    {
      id: 2,
      name: 'Smart Watch',
      sku: 'PRD-002',
      image: '../../../../assets/images/google-logo.png',
      category: 'Electronics',
      price: 199.99,
      status: 'Low Stock',
      addedDate: new Date(Date.now() - 86400000), // 1 day ago
    },
    {
      id: 3,
      name: 'Laptop Sleeve',
      sku: 'PRD-003',
      image: '../../../../assets/images/google-logo.png',
      category: 'Accessories',
      price: 29.99,
      status: 'In Stock',
      addedDate: new Date(Date.now() - 2 * 86400000), // 2 days ago
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      sku: 'PRD-004',
      image: '../../../../assets/images/google-logo.png',
      category: 'Electronics',
      price: 89.99,
      status: 'In Stock',
      addedDate: new Date(Date.now() - 3 * 86400000), // 3 days ago
    },
    {
      id: 5,
      name: 'Ergonomic Keyboard',
      sku: 'PRD-005',
      image: '../../../../assets/images/google-logo.png',
      category: 'Accessories',
      price: 119.99,
      status: 'Out of Stock',
      addedDate: new Date(Date.now() - 4 * 86400000), // 4 days ago
    },
  ];

  recentOrders: Order[] = [
    {
      id: 10093,
      date: new Date(),
      customer: {
        id: 1,
        name: 'Alex Johnson',
        email: 'alex@example.com',
        avatar: '../../../assets/images/google-logo.png',
      },
      amount: 249.98,
      items: 2,
      status: 'Processing',
    },
    {
      id: 10092,
      date: new Date(Date.now() - 3600000), // 1 hour ago
      customer: {
        id: 2,
        name: 'Sara Williams',
        email: 'sara@example.com',
        avatar: '../../../assets/images/google-logo.png',
      },
      amount: 149.99,
      items: 1,
      status: 'Completed',
    },
    {
      id: 10091,
      date: new Date(Date.now() - 7200000), // 2 hours ago
      customer: {
        id: 3,
        name: 'Mike Chen',
        email: 'mike@example.com',
        avatar: '../../../assets/images/google-logo.png',
      },
      amount: 89.97,
      items: 3,
      status: 'Pending',
    },
    {
      id: 10090,
      date: new Date(Date.now() - 14400000), // 4 hours ago
      customer: {
        id: 4,
        name: 'Jessica Lee',
        email: 'jessica@example.com',
        avatar: '../../../assets/images/google-logo.png',
      },
      amount: 199.99,
      items: 1,
      status: 'Completed',
    },
    {
      id: 10089,
      date: new Date(Date.now() - 28800000), // 8 hours ago
      customer: {
        id: 5,
        name: 'Robert Smith',
        email: 'robert@example.com',
        avatar: '../../../assets/images/google-logo.png',
      },
      amount: 59.98,
      items: 2,
      status: 'Cancelled',
    },
  ];

  getProductStatusClass(status: string): string {
    const baseClasses =
      'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full';

    switch (status) {
      case 'In Stock':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Low Stock':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Out of Stock':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return baseClasses;
    }
  }

  getOrderStatusClass(status: string): string {
    const baseClasses =
      'px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full';

    switch (status) {
      case 'Completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Processing':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'Pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Cancelled':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return baseClasses;
    }
  }
}
