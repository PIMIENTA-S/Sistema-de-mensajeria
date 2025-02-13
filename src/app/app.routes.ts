import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReporteComponent } from './components/reporte/reporte.component';

export const routes: Routes = [

    {
        path: "dashboard",
        component: NavbarComponent
    },
    {
        path: "productos",
        component: ProductListComponent
    },
    {
        path: "reportes",
        component: ReporteComponent
    },

    { path: '**', redirectTo: '/dashboard' }
];
