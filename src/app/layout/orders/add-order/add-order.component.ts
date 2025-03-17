import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import type { Customer } from 'src/app/interfaces/customer.interface';
import type { Order } from 'src/app/interfaces/order.interface';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavBarComponent, SideBarComponent],
})
export class AddOrderComponent implements OnInit {
  orderForm!: FormGroup;
  customers: Customer[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) // private orderService: OrderService, // Uncomment when you have an actual service
  {}

  ngOnInit(): void {
    this.createForm();
    this.loadCustomers();
  }

  createForm(): void {
    this.orderForm = this.fb.group({
      customerId: [null, Validators.required],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      amount: [0, [Validators.required, Validators.min(0.01)]],
      items: [1, [Validators.required, Validators.min(1)]],
      status: ['Pending', Validators.required],
    });
  }

  loadCustomers(): void {
    // In a real application, this would come from a service
    this.customers = [
      {
        id: 1,
        name: 'Kristen Watson',
        email: 'kwatson@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      },
      {
        id: 2,
        name: 'James Brown',
        email: 'jbrown@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        id: 3,
        name: 'Sarah Miller',
        email: 'smiller@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      },
      {
        id: 4,
        name: 'Robert Johnson',
        email: 'rjohnson@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
      },
      {
        id: 5,
        name: 'Emily Davis',
        email: 'edavis@example.com',
        avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
      },
    ];
  }

  onSubmit(): void {
    if (this.orderForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.orderForm.controls).forEach((key) => {
        const control = this.orderForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    // Create new order from form values
    const formValues = this.orderForm.value;
    const selectedCustomer = this.customers.find(
      (c) => c.id === +formValues.customerId
    );

    if (!selectedCustomer) {
      console.error('Customer not found');
      return;
    }

    const newOrder: Order = {
      id: Math.floor(Math.random() * 10000000), // Generate a random ID (in a real app this would come from the backend)
      date: new Date(formValues.date),
      customer: selectedCustomer,
      amount: +formValues.amount,
      items: +formValues.items,
      status: formValues.status,
    };

    console.log('New order created:', newOrder);

    // In a real application, you would save this to a backend
    // this.orderService.addOrder(newOrder).subscribe(response => {
    //   this.router.navigate(['/orders']);
    // });

    // For now, just navigate back to orders list
    this.router.navigate(['/orders']);
  }

  cancelForm(): void {
    this.router.navigate(['/orders']);
  }
}
