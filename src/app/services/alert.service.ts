import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private messageService:MessageService) { }
  alertSuccess(data:string){
    this.messageService.add({
      severity:'success',detail:data
    })
  }
  alertUpdateSuccess(){
    this.messageService.add({
      severity:'success',detail:"Cập nhật thành công"
    })
  }
  alertError(data:string){
    this.messageService.add({
      severity:'error',detail:data
    })
  }
  alertWarning(data:string){
    this.messageService.add({
      severity:'warn',detail:data
    })
  }
}
