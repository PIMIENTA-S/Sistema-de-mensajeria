import { Component } from '@angular/core';
import { Product } from '../../interface/product';
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
    { id: 1,
      name: 'Aguila',
      price: 99.99,
      image: 'assets/bavaria/aguila.png'
    },
    {
      id: 2,
      name: 'Corona',
      price: 99.99,
      image: 'assets/bavaria/corona.png'
    },
    {      
      id: 3,
      name: 'Poker',
      price: 99.99,
      image: 'assets/bavaria/poker.png'
    },
    {
      id: 4,
      name: 'Club Colombia',
      price: 99.99,
      image: 'assets/bavaria/club.png'
    },
    {
      id: 5,
      name: 'Cola Pola',
      price: 99.99,
      image: 'assets/bavaria/cola-pola.png'
    },
    {
      id: 6,
      name: 'Budweiser',
      price: 99.99,
      image: 'assets/bavaria/budweiser.png'
    },
    {
      id: 7,
      name: 'Stella Artois',
      price: 99.99,
      image: 'assets/bavaria/stella.png'
    },
    {
      id: 8,
      name: 'Stella Artois',
      price: 99.99,
      image: 'assets/bavaria/corona.png'
    }

  ]

}
