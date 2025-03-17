import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../../../shared/components/side-bar/side-bar.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { Product } from 'src/app/interfaces/product.interface';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss'],
  imports: [
    SideBarComponent,
    NavBarComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  standalone: true,
})
export class AddProductsComponent implements OnInit {
  addProductForm!: FormGroup;
  productImages: Array<{ file: File; preview: string }> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the reactive form
    this.addProductForm = this.fb.group({
      name: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(0)]],
      status: ['In Stock', [Validators.required]],
      addedDate: [new Date().toISOString().slice(0, 10), [Validators.required]],
    });
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length) {
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();

        reader.onload = () => {
          this.productImages.push({
            file: file,
            preview: reader.result as string,
          });
        };

        reader.readAsDataURL(file);
      }
    }
  }

  removeImage(index: number): void {
    this.productImages.splice(index, 1);
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const formValues = this.addProductForm.value;

      // Construct the Product object
      const newProduct: Product = {
        id: 0, // Typically generated server-side
        name: formValues.name,
        sku: formValues.sku,
        // In a real app, you'd upload these images and store their URLs
        image:
          this.productImages.length > 0 ? this.productImages[0].preview : '',
        imageGallery: this.productImages.map((img) => img.preview), // Store all image URLs
        category: formValues.category,
        price: formValues.price,
        status: formValues.status,
        addedDate: new Date(formValues.addedDate),
      };

      console.log('New product:', newProduct);
      // Here you would call your service to save the product
    }
  }
}
