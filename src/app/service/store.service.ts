import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Store from '../model/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(public http:HttpClient) { }
  Url = "https://mcdonalds-live-engage-api-stage-1.azurewebsites.net/stores.json";
  
  GetAllStores() {
    const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      const httpOptions = { headers: headers };
    return this.http.get<Store[]>(this.Url,httpOptions);
  }
}
