import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import type { Order } from 'src/app/interfaces/order.interface';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  imports: [
    SideBarComponent,
    NavBarComponent,
    NgClass,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class OrdersListComponent implements OnInit {
  constructor() {}

  orders: Order[] = [];
  filteredOrders: Order[] = [];
  searchTerm: string = '';
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  getOrders(): void {
    // Sample data - in a real application, this would come from a service
    this.orders = [
      {
        id: 7773309,
        date: new Date(2025, 2, 10), // March 10, 2025
        customer: {
          id: 1,
          name: 'Kristen Watson',
          email: 'kwatson@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        },
        amount: 1452.5,
        items: 20,
        status: 'Completed',
      },
      {
        id: 7773310,
        date: new Date(2025, 2, 9), // March 9, 2025
        customer: {
          id: 1,
          name: 'Kristen Watson',
          email: 'kwatson@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        },
        amount: 1452.5,
        items: 20,
        status: 'Processing',
      },
      {
        id: 7773311,
        date: new Date(2025, 2, 8), // March 8, 2025
        customer: {
          id: 1,
          name: 'Kristen Watson',
          email: 'kwatson@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        },
        amount: 1452.5,
        items: 20,
        status: 'Pending',
      },
      {
        id: 7773312,
        date: new Date(2025, 2, 7), // March 7, 2025
        customer: {
          id: 1,
          name: 'Kristen Watson',
          email: 'kwatson@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
        },
        amount: 1452.5,
        items: 20,
        status: 'Completed',
      },
      {
        id: 7773313,
        date: new Date(2025, 2, 6), // March 6, 2025
        customer: {
          id: 2,
          name: 'James Brown',
          email: 'jbrown@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        amount: 879.99,
        items: 15,
        status: 'Cancelled',
      },
      {
        id: 7773314,
        date: new Date(2025, 2, 5), // March 5, 2025
        customer: {
          id: 3,
          name: 'Sarah Miller',
          email: 'smiller@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        },
        amount: 2145.75,
        items: 32,
        status: 'Completed',
      },
      {
        id: 7773315,
        date: new Date(2025, 2, 4), // March 4, 2025
        customer: {
          id: 4,
          name: 'Robert Johnson',
          email: 'rjohnson@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        },
        amount: 567.25,
        items: 8,
        status: 'Processing',
      },
      {
        id: 7773316,
        date: new Date(2025, 2, 3), // March 3, 2025
        customer: {
          id: 5,
          name: 'Emily Davis',
          email: 'edavis@example.com',
          avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
        },
        amount: 1298.4,
        items: 18,
        status: 'Pending',
      },
    ];
  }

  ngOnInit(): void {
    this.getOrders();
    this.filteredOrders = this.orders;
  }

  filterOrders(): void {
    if (!this.searchTerm.trim()) {
      this.filteredOrders = this.orders;
      return;
    }

    const term = this.searchTerm.toLowerCase().trim();
    this.filteredOrders = this.orders.filter(
      (order) =>
        order.customer.name.toLowerCase().includes(term) ||
        order.id.toString().includes(term) ||
        order.status.toLowerCase().includes(term)
    );
  }

  editOrder(order: any) {
    // Implement your edit logic here
    // For example, navigate to an order edit page:
    //this.router.navigate(['/orders/edit', order.id]);
  }

  deleteOrder(order: any) {
    // Implement your delete logic here
    // console.log('Deleting order:', order);
    // Optionally, show a confirmation dialog before deleting
  }
}
