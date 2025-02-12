import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  lista = [
    "Productos",
    "Categorias",
    "Proveedores",
    "Ventas",
    "Reportes",
    "Usuarios",
    "Configuración"

  ]
}
