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
    },
    {
      id: 3,
      name: "Cervecería Nacional",
      contact: "Carlos Gómez",
      phone: "312-456-7890",
      products: ["Pilsener", "Club Premium", "Budweiser"]
    },
    {
      id: 4,
      name: "Heineken Distribuidores",
      contact: "Ana Martínez",
      phone: "315-678-1234",
      products: ["Heineken", "Amstel", "Sol"]
    },
    {
      id: 5,
      name: "Distribuidora Andina",
      contact: "Pedro Sánchez",
      phone: "320-456-7899",
      products: ["Cusqueña", "Cristal", "Paceña"]
    },
    {
      id: 6,
      name: "Importadora Belga",
      contact: "Lucía Fernández",
      phone: "310-654-3210",
      products: ["Leffe", "Hoegaarden", "Duvel"]
    },
    {
      id: 7,
      name: "Distribuciones Artesanales",
      contact: "José Ramírez",
      phone: "313-111-2222",
      products: ["BBC", "3 Cordilleras", "Apóstol"]
    },
    {
      id: 8,
      name: "Cervecería Modelo",
      contact: "Sofía Duarte",
      phone: "311-222-3333",
      products: ["Corona Extra", "Modelo Especial", "Victoria"]
    },
    {
      id: 9,
      name: "Distribuidora San Miguel",
      contact: "Fernando Herrera",
      phone: "314-987-6543",
      products: ["San Miguel", "Mahou", "Alhambra"]
    },
    {
      id: 10,
      name: "Bodega Cervecera del Sur",
      contact: "Ricardo Pineda",
      phone: "316-555-7890",
      products: ["Quilmes", "Schneider", "Patagonia"]
    },
    {
      id: 11,
      name: "Cervezas del Norte",
      contact: "Laura Estrada",
      phone: "317-333-4444",
      products: ["Polar", "Zulia", "Regional"]
    },
    {
      id: 12,
      name: "Importadora Alemana",
      contact: "Andrés Müller",
      phone: "318-666-7777",
      products: ["Paulaner", "Weihenstephaner", "Erdinger"]
    },
    {
      id: 13,
      name: "Distribuidora Premium",
      contact: "Natalia Torres",
      phone: "319-444-5555",
      products: ["Guinness", "Kilkenny", "Murphy's"]
    },
    {
      id: 14,
      name: "Distribuciones Mexicanas",
      contact: "Roberto Gutiérrez",
      phone: "321-777-8888",
      products: ["Tecate", "Carta Blanca", "Indio"]
    },
    {
      id: 15,
      name: "Cervezas del Mundo",
      contact: "Valentina Ríos",
      phone: "322-888-9999",
      products: ["Peroni", "Moretti", "Birra del Borgo"]
    }
  ];


  addsupplier(){
    
  }
  
  


}
