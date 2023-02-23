import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  private baseURL="https://free-food-menus-api-production.up.railway.app";

  constructor(private http:HttpClient) { }

  getAllItems(){
    return this.http.get(`${this.baseURL}/burgers`);
  }
}
