import { Component, OnInit } from '@angular/core';
// import {Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from "chart.js";
import {Chart} from 'node_modules/chart.js';
import { registerables } from 'chart.js';
import {AquaticInformationService} from "../../services/aquatic-information.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-aquatic-chart',
  templateUrl: './aquatic-chart.component.html',
  styleUrls: ['./aquatic-chart.component.css']
})
export class AquaticChartComponent implements OnInit {

  constructor(private aquaticInformationService:AquaticInformationService, private activatedRoute:ActivatedRoute,private datePipe: DatePipe) {
    Chart.register(...registerables);
  }
  content:any;


  color1 = 'rgba(255, 99, 132, 1)';
  color2 = 'rgba(54, 162, 235, 1)';
  color3 = 'rgba(255, 206, 86, 1)';
  color4 = 'rgba(75, 192, 192, 1)';
  color5 = 'rgba(153, 102, 255, 1)';
  color6 = 'rgba(255, 159, 64, 1)';


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.callApi(param.get("deviceId"));
    })
  }

  callApi(deviceId:any){
    this.aquaticInformationService.getAllByDevice(deviceId).subscribe(
      {
        next:(data:any)=>{
          this.content = data.content;
          var labels: any[] = [];
          var dissolvedOxygenData: any[] = [];
          var humidityData: any[] = [];
          var temperatureData: any[] = [];
          var PHData: any[] = [];
          this.content.map((info:any)=> {
            labels.push(this.datePipe.transform(info.createDate,'M/d/yy, h:mm a'));
            dissolvedOxygenData.push(info.dissolvedOxygen);
            humidityData.push(info.humidity);
            temperatureData.push(info.temperature);
            PHData.push(info.ph);
          });
          this.newChart("dissolvedOxygenChart",labels,dissolvedOxygenData,"Biểu đồ Oxy hòa tan (mg/L)",this.color1);
          this.newChart("humidityChart",labels,humidityData,"Biểu đồ độ ẩm (g/m³)",this.color2);
          this.newChart("temperatureChart",labels,temperatureData,"Biểu đồ nhiệt độ (℃)",this.color3);
          this.newChart("PHChart",labels,PHData,"Biểu đồ độ PH (PH)",this.color4);
        }
      }
    )
  }

  newChart(chartName:string,labels:any,data:any,label:any, color:any) {
    var dissolvedOxygenChart = new Chart(chartName, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          backgroundColor: color
          ,
          borderColor: [
            color
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
