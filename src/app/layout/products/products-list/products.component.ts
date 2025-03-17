import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from "../../../shared/components/side-bar/side-bar.component";
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import type { Product } from 'src/app/interfaces/product.interface';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [
    SideBarComponent,
    NavBarComponent,
    FormsModule,
    RouterModule,
    NgClass,
    CommonModule,
    IonicModule
  ],
})
export class ProductsComponent implements OnInit {

  math = Math;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalItems: number = 0;

  displayOptions: number[] = [10, 25, 50, 100];
  selectedDisplayOption: number = 10;

  loadProducts() {
    // Mock data - replace with actual API call
    this.products = [
      {
        id: 1,
        name: 'Dog Food, Chicken & Chicken Liver Recipe',
        sku: 'SKU7712300',
        image: '../../../../assets/images/google-logo.png',
        category: 'Pet Food',
        price: 1452.0,
        status: 'Out of Stock',
        addedDate: new Date('2023-08-15'),
       },
      {
        id: 2,
        name: 'Grain Free Dry Dog Food | Salmon Style Nutrients',
        sku: 'SKU7712309',
        image: '../../../../assets/images/google-logo.png',
        category: 'Pet Food',
        price: 1452.0,
        status: 'In Stock',
        addedDate: new Date('2023-09-22'),
      },
      {
        id: 3,
        name: 'Walnuts Pumpkin Pasta! Veg Pumpkin With Organic',
        sku: 'SKU7712310',
        image: '../../../../assets/images/google-logo.png',
        category: 'Organic Food',
        price: 1452.0,
        status: 'Low Stock',
        addedDate: new Date('2023-10-05'),
      },
      {
        id: 4,
        name: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
        sku: 'SKU7712311',
        image: '../../../../assets/images/google-logo.png',
        category: 'Pet Treats',
        price: 1452.0,
        status: 'In Stock',
        addedDate: new Date('2023-11-12'),
      },
      {
        id: 5,
        name: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
        sku: 'SKU7712312',
        image: '../../../../assets/images/google-logo.png',
        category: 'Pet Treats',
        price: 1452.0,
        status: 'In Stock',
        addedDate: new Date('2023-12-01'),
      },
    ];

    this.totalItems = this.products.length;
    this.filteredProducts = [...this.products];
  }

  toAddProducts(){
    this.router.navigate(['products/addProducts']);
  }

  searchProducts() {
    if (!this.searchQuery.trim()) {
      this.filteredProducts = [...this.products];
    } else {
      const query = this.searchQuery.toLowerCase().trim();
      this.filteredProducts = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.sku.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    this.totalItems = this.filteredProducts.length;
    this.currentPage = 1;
  }

  addNewProduct() {
    console.log('Navigate to add product page');
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange(event: any) {
    this.selectedDisplayOption = parseInt(event.target.value);
    this.itemsPerPage = this.selectedDisplayOption;
    this.currentPage = 1;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  getTotalPages() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

}
