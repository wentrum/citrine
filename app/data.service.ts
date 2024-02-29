import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    this.loadData();
  }
  public entries: Array<Group> = [];



  loadData() {
    var url = "./assets/data.json";
    const data = this.httpClient.get<any>(url).subscribe(response => {
      this.entries = response;

    });
  }
}
export interface Entry {
  title: string;
  url: string;
}
export interface Group {
  title: string;
  entries: Array<Entry>;

}
