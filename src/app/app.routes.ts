import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

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
    {
        path: "proveedores",
        component: ProveedoresComponent
    },

    { path: '**', redirectTo: '/dashboard' }
];
