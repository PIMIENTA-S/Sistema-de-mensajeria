import { Component, signal } from '@angular/core';
import { Card } from '../../interface/card';
import { ChartData } from '../../interface/chartdata';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  cards = signal<Card[]>([
    { title: 'Primary Card', type: 'primary' },
    { title: 'Warning Card', type: 'warning' },
    { title: 'Success Card', type: 'success' },
    { title: 'Danger Card', type: 'danger' }
  ]);

  areaChartData = signal<ChartData>({
    title: 'Area Chart Example',
    labels: ['Mar 1', 'Mar 3', 'Mar 5', 'Mar 7', 'Mar 9', 'Mar 11', 'Mar 13'],
    values: [10000, 30000, 25000, 18000, 30000, 25000, 35000]
  });

  barChartData = signal<ChartData>({
    title: 'Bar Chart Example',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [4000, 5000, 6000, 8000, 10000, 15000]
  });

  getCardClass(type: string): string {
    switch (type) {
      case 'primary': return 'bg-primary';
      case 'warning': return 'bg-warning text-dark';
      case 'success': return 'bg-success';
      case 'danger': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  getMaxValue(values: number[]): number {
    return Math.max(...values);
  }
}
