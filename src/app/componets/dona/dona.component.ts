import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent implements OnInit {
    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';
  
    // events
    public chartClicked(event:any){
      console.log(event);
    }
  
    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public random(){
      this.doughnutChartData={
        ...this.doughnutChartData,
        datasets:[
          {data: [
           Math.random()*100,
           Math.random()*100,
           Math.random()*100,
          ]},
          {data: [
           Math.random()*100,
           Math.random()*100,
           Math.random()*100,
          ]},
        ]}
    }

  constructor() { }

  ngOnInit(): void {
  }

}
