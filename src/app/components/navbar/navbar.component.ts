import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Dash } from '../../interface/dash';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  lista: Dash[] = [
    {
      name:"Productos",
      route: "/productos",
      icon: 'fas fa-home'
    },
    {
      name:"Categorias",
      route: "/categorias",
      icon: 'fas fa-home'
    },
    {
      name:"Proveedores",
      route: "/proveedores",
      icon: 'fas fa-home'
    },
    {
      name:"Reportes",
      route: "/reportes",
      icon: 'fas fa-home'
    },
    {
      name:"Configuración",
      route: "/configuracion",
      icon: 'fas fa-home'
    }
  ]
}
