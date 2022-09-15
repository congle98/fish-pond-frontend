import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AquaticInformationService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  getAll(pageableRequest:any){
    let url = this.baseUrl+"/aquatic-information?page=" +pageableRequest.page +"&size=10"+"&sort="+pageableRequest.sort+","+pageableRequest.sortType+"&search="+pageableRequest.search;
    return this.httpClient.get(url);
  }

  getAllOfDeviceLastUpdate(pageableRequest:any){
    let url = this.baseUrl+"/aquatic-information/of-device-last-update?page=" +pageableRequest.page +"&size=10"+"&sort="+pageableRequest.sort+","+pageableRequest.sortType+"&search="+pageableRequest.search;
    return this.httpClient.get(url);
  }

  getAllByDevice(deviceId:any){
    let url = this.baseUrl+"/aquatic-information/device/"+deviceId+"?size=5&sort=create_date,desc";
    console.log(url);
    return this.httpClient.get(url);
  }
}
