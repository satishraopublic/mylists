import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MylistsApiService {

  retVal = [{'id':1,'name': 'Indian Store', 'itemCount':3, 'description':'This is a shopping list for indian store'}, 
  {'id':2,'name': 'Hinens Grocery Store', 'itemCount':5, 'description':'This is a shopping list for Hinen grocery store'}, 
  {'id':3,'name':'Costco wholesalers', 'itemCount':2, 'description':'This is a shopping list for Costco wholesale store'},
  {'id':4,'name': 'Amazon online store', 'itemCount':9, 'description':'This is a shopping list for Amazon online store'}];

  constructor(private http: HttpClient) { 

  }

  getLists(){
    return  JSON.parse(JSON.stringify(this.retVal));
  }

  getListDetails(id: number){
    return this.retVal[id];
  }
}
