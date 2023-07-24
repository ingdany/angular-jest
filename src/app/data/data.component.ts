import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  template: `
    <div *ngIf="data">{{ data }}</div>
    <div *ngIf="!data">Loading data...</div>
  `,
  // template: '<div>{{ data }}</div>'  
})

export class DataComponent implements OnInit {
  public data: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchDataFromService();
    // this.data = this.dataService.fetchData();    
  }

  fetchDataFromService(): void {
    this.dataService.fetchData().then((result) => {
      console.log(result);
      this.data = result;
    });
  }
}