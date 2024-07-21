import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  http = inject(HttpClient);
  constructor() { }

  setLocastorageData(data:any){
    localStorage.setItem("AssignmentData",data);
  }
  getLocalStorageData(){
   return localStorage.getItem("AssignmentData")
  }
  postData(url:any, payload:any){
  return this.http.post(url, payload)
  }

  getUserName(){
    let localstr =this.getLocalStorageData(); 
    return localstr ?  localstr.split('@')[0] :''   
  }
}
