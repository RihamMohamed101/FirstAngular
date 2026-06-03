import { Component } from '@angular/core';
import { IProduct } from '../iproduct';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: IProduct[];
  Categoryes: ICategory[];

  searchName: string = '';
  selectedCatId: number = 0;

  constructor() {
    this.Categoryes = [
      { id: 1, name: 'cat1' },
      { id: 2, name: 'cat2' },
      { id: 3, name: 'cat3' },
    ];

    this.products = [
      {
        id: 1,
        name: 'Dell XPS 13 Laptop',
        quantity: 5,
        price: 45000,
        img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'MacBook Pro',
        quantity: 3,
        price: 120000,
        img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
        categoryID: 1,
      },

      {
        id: 3,
        name: 'HP Pavilion Laptop',
        quantity: 7,
        price: 35000,
        img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
        categoryID: 2,
      },

      {
        id: 3,
        name: 'HP Pavilion Laptop',
        quantity: 0,
        price: 35000,
        img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
        categoryID: 2,
      },
    ];
  }

  buyProduct(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  get filteredProducts(): IProduct[] {
    return this.products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(this.searchName.toLowerCase());
      const matchesCategory =
        this.selectedCatId == 0 || product.categoryID == Number(this.selectedCatId);

      return matchesName && matchesCategory;
    });
  }
}
