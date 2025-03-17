export interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  category: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  addedDate: Date;
  imageGallery?: string[];
}
