import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { UserapiService } from '../modules/users/userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent implements OnInit{
  selected: Date | null = new Date()

  /* to hidden sidebar */
  showSideBar:boolean = true
  /* admin name */
  adminName:string = ""
  employeeCount:number=0

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {};
  constructor( private api:UserapiService , private router:Router){
    this.chartOptions={
      
    chart: {
      /* type of the project */
      type: 'pie'
  },
  title: {
    /* title of the chart */
      text: 'Project Completion Report'
  },
  tooltip: {
      valueSuffix: '%'
  },
  /* remove the subtitle */
  plotOptions: {
      series: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: [{
              enabled: true,
              distance: 20
          }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                  fontSize: '1.2em',
                  textOutline: 'none',
                  opacity: 0.7
              },
              filter: {
                  operator: '>',
                  property: 'percentage',
                  value: 10
              }
          }]
      }
  },
  /* to remove the watermark */
  credits:{
    enabled:false
  },
  series: [
      {
          name: 'project',
          colorByPoint: true,
          data: [
              {
                  name: 'Chrome',
                  y: 55.02
              },
              {
                  name: 'Edge',
                  sliced: true,
                  selected: true,
                  y: 26.71
              },
              {
                  name: 'FireFox',
                  y: 1.09
              },
              {
                  name: 'Safari',
                  y: 15.5
              },
              {
                  name: 'Opera',
                  y: 1.68
              }
          ]
      }
  ]

    }
    HC_exporting(Highcharts)
  }

  ngOnInit(): void {
      if(localStorage.getItem("name")){
       this.adminName = localStorage.getItem("name") || ""
      }
     this.totalEmployee() 
  }

 menuBtnClick(){
  this.showSideBar=!this.showSideBar
 }
 totalEmployee(){
    this.api.getallUsersApi().subscribe((res:any)=>{
       this.employeeCount = res.length
    })
 }

 logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("pswd")
 
   this.router.navigateByUrl('')
 }


}
