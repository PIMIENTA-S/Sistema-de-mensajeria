import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {

  suppliers = [
    {
      id: 1,
      name: "Bavaria S.A.",
      contact: "Juan Pérez",
      phone: "301-234-5678",
      products: ["Poker", "Club Colombia", "Águila"]
    },
    {
      id: 2,
      name: "Distribuidora Corona",
      contact: "María López",
      phone: "300-987-6543",
      products: ["Corona", "Stella Artois"]
    }
  ];

}
