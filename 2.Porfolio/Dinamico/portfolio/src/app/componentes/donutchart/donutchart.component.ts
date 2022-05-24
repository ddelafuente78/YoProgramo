import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ISkill } from 'src/app/Servicios/Interfaces/ISkills';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})

export class DonutchartComponent  implements OnInit{


  @Input() donut_modo: string = "";
  @Input() isSoft: boolean = false;
  @Input() categoria: string = "";
  @Input() labels: string[] = [];
  @Input() datos: number[]= [];
  @Input() entryskills: ISkill[]=[]; 
  
  _issoftskill: boolean=false;
  _categoria: string="";
  _nombre: string="";
  _porcentaje: number=0;
  
  
  // Doughnut
public doughnutChartLabels: string[] = [];
public doughnutChartData: ChartData<'doughnut'> = {datasets: []};
public doughnutChartType: ChartType = 'doughnut';
public skills: ISkill[]=[];

  constructor() { 
  }

  
  ngOnInit() {
    this.doughnutChartLabels = this.labels
    this.doughnutChartData.labels=this.doughnutChartLabels;
    this.doughnutChartData.datasets = [{ data: this.datos }];
    this.skills = this.entryskills;
  }

refreshChart(){
  window.location.reload();
  /*this.datos.push(1);
  setTimeout(()=> {this.datos.pop();},1)
  */
}

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

}
