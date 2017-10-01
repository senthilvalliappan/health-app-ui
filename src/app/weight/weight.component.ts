import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

public lineChartData:Array<any> = [
    
    {data: [ 57.5, 51, 54, 49.8, 54.7, 53.4] }
    
  ];

  
  public lineChartLabels:Array<any> = [ ' ', ' ', ' ', ' ', ' ', ' '];
  public lineChartOptions:any = {

            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
        }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
        }]
            }
        };

  public lineChartColors:Array<any> = [
    { //blue
      backgroundColor: 'rgba(199,235,251,0.5)',
      borderColor: 'rgba(90,202,235,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '',
      pointHoverBackgroundColor: 'blue',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';
 
  
 
 
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
