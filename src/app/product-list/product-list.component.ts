import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  

  products: Product[] = [
    { id: 1, name: "Cerveza Artesanal", price: 120, category: "Cerveza", description: "Cerveza rubia con notas cítricas." },
    { id: 2, name: "Mojito", price: 150, category: "Coctel", description: "Refrescante coctel de ron, hierbabuena y lima." },
    { id: 3, name: "Agua Mineral", price: 50, category: "Refresco", description: "Agua" },
    { id: 4, name: "Margarita", price: 80, category: "Coctel", description: "Coctel con tequila, jugo de limón y sal." },
    { id: 5, name: "Coca-Cola", price: 30, category: "Refresco", description: "Bebida" },
  ];
}
