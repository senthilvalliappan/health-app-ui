import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


public lineChartData : any = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Today'},
    {data: [28, 48, 40, 19, 86, 27, 25,20,30,40], label: 'Avg'}

  ];
  public lineChartLabels:Array<any> = [' ', ' ', ' ', ' ', ' ', ' ', ' ',' ',' ',' '];
  public lineChartOptions:any = {

            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
        }],
                yAxes: [{
                    gridLines: {
                        display: false,

                    }
        }]
            }

        };

  public lineChartColors:Array<any> = [
    
    { // dark grey
      backgroundColor: 'rgba(199,235,251,0.5)',
      borderColor: 'rgba(74,192,226,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: 'rgba(148,159,177,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  
 ngOnInit() {
  }
  
  }



  

