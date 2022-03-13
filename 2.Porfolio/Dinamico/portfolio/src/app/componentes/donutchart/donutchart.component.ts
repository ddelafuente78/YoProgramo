import { Component, OnInit, Input} from '@angular/core';
import { ChartData, ChartDataset, ChartType } from 'chart.js';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})

export class DonutchartComponent  implements OnInit{

  @Input() categoria: string = "";
  
  datos: number[]= []; 
  // Doughnut
public doughnutChartLabels: string[] = [];
public doughnutChartData: ChartData<'doughnut'> = {datasets: []};
public doughnutChartType: ChartType = 'doughnut';

  constructor() { 
  }

  ngOnInit() {
    console.log("ver:" + this.categoria)
    switch (this.categoria) {
      case "Programacion":
        this.doughnutChartLabels = [ 'Java', '.Net', 'Python' ]
        this.datos = [40,40,20] 
        this.doughnutChartData.labels=this.doughnutChartLabels;
        this.doughnutChartData.datasets = [{ data: this.datos }];
        break;
        case "Bases":
          this.doughnutChartLabels = [ 'Mysql', 'SqlServer', 'MongoDB' ]
          this.doughnutChartData.labels=this.doughnutChartLabels;
          this.datos = [40 ,50, 10] 
          this.doughnutChartData.datasets = [{ data: this.datos }];
          break;
      case "Web":
        this.doughnutChartLabels = [ 'JavaScript', 'HTML', 'CSS' ]
        this.doughnutChartData.labels=this.doughnutChartLabels;
        this.datos = [33 ,33, 33] 
        this.doughnutChartData.datasets = [{ data: this.datos }];
        break;
      case "Idioma":
        this.doughnutChartLabels = [ 'Ingles', 'Castellano']
        this.doughnutChartData.labels=this.doughnutChartLabels;
        this.datos = [15 ,85] 
        this.doughnutChartData.datasets = [{ data: this.datos }];
        break;
      case "Comunicacion":
        this.doughnutChartLabels = [ 'Oratoria', 'Pedagogia']
        this.doughnutChartData.labels=this.doughnutChartLabels;
        this.datos = [50 ,50] 
        this.doughnutChartData.datasets = [{ data: this.datos }];
        break;
      default:
        break;
    }
  }

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

}
