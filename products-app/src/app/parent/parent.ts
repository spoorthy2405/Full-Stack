import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ChildComponent } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css']
})
export class ParentComponent implements OnInit {

  // All products from API
  products: any[] = [];

  // Filtered products from child component
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res: any) => {
      console.log("API DATA:", res.products);
      this.products = res.products;          // API data
      this.filteredProducts = res.products;  // Default show all
    });
  }

  // Receive filtered data from child
  onFilterChange(data: any[]) {
    console.log("Filtered Data:", data);
    this.filteredProducts = data;
  }
}
