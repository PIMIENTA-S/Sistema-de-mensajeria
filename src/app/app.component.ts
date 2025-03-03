import { Component } from '@angular/core';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'osadia-barBeer';
}
