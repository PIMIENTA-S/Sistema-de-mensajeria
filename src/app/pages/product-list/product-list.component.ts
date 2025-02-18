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
  imageLoaded: boolean = false;



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
      name: 'Cola Lulo',
      price: 99.99,
      image: 'assets/bavaria/cola-lulo.png'
    },
    { id: 9,
      name: 'Aguila 0.0',
      price: 99.99,
      image: 'assets/bavaria/aguila0.png'
    },
    {
      id: 10,
      name: 'Aguila Limon',
      price: 99.99,
      image: 'assets/bavaria/aguila-limon.png'
    },
    {      
      id: 11,
      name: 'Beck',
      price: 99.99,
      image: 'assets/bavaria/beck.png'
    },
    {
      id: 12,
      name: 'Busch',
      price: 99.99,
      image: 'assets/bavaria/busch.png'
    },
    {
      id: 13,
      name: 'Costeña',
      price: 99.99,
      image: 'assets/bavaria/costeña.png'
    },
    {
      id: 14,
      name: 'Costeñita',
      price: 99.99,
      image: 'assets/bavaria/costeñita.png'
    },
    {
      id: 15,
      name: 'Costeña - Collarin',
      price: 99.99,
      image: 'assets/bavaria/ncollarin.png'
    },
    {
      id: 16,
      name: 'Michelob',
      price: 99.99,
      image: 'assets/bavaria/michelob.png'
    },
    {
      id: 17,
      name: 'Mikes',
      price: 99.99,
      image: 'assets/bavaria/mikes.png'
    },
    {
      id: 18,
      name: 'Pilsen',
      price: 99.99,
      image: 'assets/bavaria/pilsen.png'
    },
    {
      id: 19,
      name: 'Poker Malta',
      price: 99.99,
      image: 'assets/bavaria/poker-malta.png'
    },
    {
      id: 20,
      name: 'Poker Roja',
      price: 99.99,
      image: 'assets/bavaria/poker-red.png'
    },
    {
      id: 21,
      name: 'Redds',
      price: 99.99,
      image: 'assets/bavaria/redds.png'
    }

  ]

}
