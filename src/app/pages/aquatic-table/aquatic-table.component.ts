import { Component, OnInit } from '@angular/core';
import '/src/assets/js/app';
import '/src/assets/js/google';
import {AquaticInformationService} from "../../services/aquatic-information.service";
@Component({
  selector: 'app-aquatic-table',
  templateUrl: './aquatic-table.component.html',
  styleUrls: ['./aquatic-table.component.css']
})
export class AquaticTableComponent implements OnInit {
  sortFishPondName = "fishPond.name";
  sortDeviceID = "device.device_id";
  sortCreateDate = "create_date";
    sortDissolvedOxygen = "dissolved_oxygen";
  sortHumidity = "humidity";
    sortTemperature = "temperature";
  sortPH = "ph";
  sortEvaluation = "evaluation";

  sortTypeDESC = "desc";
  sortTypeASC = "asc";

  pageableRequest={
    page:0,
    size:10,
    search:"",
    sort:this.sortFishPondName,
    sortType:this.sortTypeDESC,
    totalElements:0,
    totalPages:0,
    numberOfElements:0,
    fist:false,
    last:false,
  };
  content:any[];
  constructor(private aquaticInformationService:AquaticInformationService) { }

  ngOnInit(): void {
    this.callFindAllOfDeviceLastUpdate();
  }

  changePage(value:any){
    if((this.pageableRequest.page + value) < 0 || (this.pageableRequest.page + value) >= this.pageableRequest.totalPages){
      return;
    }
    this.pageableRequest.page += value;
    this.callFindAllOfDeviceLastUpdate();

  }

  handleSearch(){
      this.callFindAllOfDeviceLastUpdate()
  }

  handleSort(value:any){
    if(this.pageableRequest.sort == value){
      if(this.pageableRequest.sortType == this.sortTypeDESC){
        this.pageableRequest.sortType = this.sortTypeASC
      }
      else {
        this.pageableRequest.sortType = this.sortTypeDESC
      }
    }
    else {
      this.pageableRequest.sort = value;
      this.pageableRequest.sortType = this.sortTypeDESC
    }
    this.callFindAllOfDeviceLastUpdate();
  }

  callFindAllOfDeviceLastUpdate(){
    this.aquaticInformationService.getAllOfDeviceLastUpdate(this.pageableRequest).subscribe(
      {
        next:(data:any) => {
          this.pageableRequest.totalElements = data.totalElements;
          this.pageableRequest.totalPages = data.totalPages;
          this.pageableRequest.fist = data.fist;
          this.pageableRequest.last = data.last;
          this.content = data.content;
          this.pageableRequest.numberOfElements = data.numberOfElements;
          if(data.empty){
            this.pageableRequest.page = 0;
          }
        }
      }
    )
  }

  checkColor(evaluation:string){
    let color = "p-button-success"
    if(evaluation == "cảnh báo"){
      color = "p-button-danger";
    }
    if(evaluation == "bình thường"){
      color = "p-button-warning";
    }
    return color;
  }


}
