import { Routes } from '@angular/router';
import { LayoutcomponentComponent } from './layout/layoutcomponent/layoutcomponent.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { OrdersListComponent } from './layout/orders/orders-list/orders-list.component';
import { AddOrderComponent } from './layout/orders/add-order/add-order.component';
import { ProductsComponent } from './layout/products/products-list/products.component';
import { AddProductsComponent } from './layout/products/add-products/add-products.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: LayoutcomponentComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ordersList', component: OrdersListComponent },
      { path: 'addOrder', component: AddOrderComponent },
      { path: 'productsList', component: ProductsComponent },
      { path: 'addProduct', component: AddProductsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  // {
  //   path:'dashboard',
  //   loadComponent: () =>
  //       import('./layout/dashboard/dashboard.component').then((m)=>m.DashboardComponent)
  //   },
  //   {
  //     path:'products/list',
  //     loadComponent:() =>
  //       import('./layout/products/products-list/products.component').then((m)=>m.ProductsComponent)
  //   },
  //   {
  //     path:'products/addProducts',
  //     loadComponent:() =>
  //       import('./layout/products/add-products/add-products.component').then((m)=>m.AddProductsComponent)
  //   },
  //   {
  //     path:'orders/ordersList',
  //     loadComponent: () =>
  //       import('./layout/orders/orders-list/orders-list.component').then((m)=>m.OrdersListComponent)
  //   },
  //   {
  //     path:"orders/addOrders",
  //     loadComponent: ()=>
  //       import('./layout/orders/add-order/add-order.component').then((m) => m.AddOrderComponent)
  //   }
];
