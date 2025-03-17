import type { Customer } from "./customer.interface";

export interface Order {
  id: number;
  date: Date;
  customer: Customer;
  amount: number;
  items: number;
  status: 'Completed' | 'Processing' | 'Pending' | 'Cancelled';
}
