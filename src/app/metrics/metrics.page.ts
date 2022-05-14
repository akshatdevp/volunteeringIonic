import { Component,  ViewChild } from '@angular/core';
import {Chart, registerables} from 'chart.js';
// import * as U from "../Utils.js";
@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.page.html',
  styleUrls: ['./metrics.page.scss'],
})
export class MetricsPage{
  @ViewChild('bc',{static: true}) public bc;
  @ViewChild('rc',{static : true}) public rc;
  constructor() {}
  ionViewWillEnter(){
    Chart.register(...registerables)
    this.barChartMethod();
    this.radarChartMethod();
  }
  barChartMethod(){


    this.bc = new Chart(this.bc.nativeElement, {
      type : 'bar',
      data : {
        labels : [2017,2018,2019,2020],
        datasets : [{
          //barPercentage : 0.8,
          //barThickness : 'flex',
          label : 'T1',
          stack : 'Base',
          backgroundColor : "#E18A24",
          data : [10,20,30,40],
        },
        {
          //barPercentage : 0.8,
          //barThickness : 'flex',
          label : 'T2',
          stack : 'Sensitivity',
          backgroundColor : "#2A93CE",
          data : [10,20,31,45],

        }]
      },
      options : {
        scales : {
            y : {
              beginAtZero : true
            }
        },
        responsive : true
      }
    })
  }
  radarChartMethod(){
    const data = this.getData()
    this.rc = new Chart(this.rc.nativeElement,{
      type : 'radar',
      data : data,
      options :{
        responsive : true
      }
    })

  }
  getData(){
    return {
      labels: [
        'Math',
        'English',
        'None',
        'Science',
        'Dental',
        'Java',
        'Cricket'
      ],
      datasets: [{
        label: 'Male volunteers',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
      {
        label: 'Female volunteers',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'}
    ]
    };
  }
}
