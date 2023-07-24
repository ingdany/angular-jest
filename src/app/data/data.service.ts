import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  fetchData(): Promise<string> {
    return Promise.resolve('Mocked Data');
  }
  // fetchData(): string {
  //   return 'Mocked Data';
  // }
}
