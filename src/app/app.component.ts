import { Component } from '@angular/core';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'osadia-barBeer';
}
