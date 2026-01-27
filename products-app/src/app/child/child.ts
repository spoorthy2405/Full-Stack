import { Component, Input, Output, EventEmitter, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.html',
  styleUrls: ['./child.css']
})
export class ChildComponent {

  @Input() products: any[] = [];
  @Output() filtered = new EventEmitter<any[]>();

  searchText = signal('');
category = signal('');
minPrice = signal(0);
maxPrice = signal(100000);

constructor() {
  effect(() => {
    const search = this.searchText().toLowerCase();
    const cat = this.category();
    const min = this.minPrice();
    const max = this.maxPrice();

    const result = this.products.filter(p =>
      p.title.toLowerCase().includes(search) &&
      (cat ? p.category === cat : true) &&
      p.price >= min && p.price <= max
    );

    this.filtered.emit(result);
  });
}

}
