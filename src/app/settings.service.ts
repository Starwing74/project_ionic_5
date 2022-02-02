import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private  table_lap : String[];
  private indice : number;

  constructor() {
    this.indice = 0;
  }

  lap(value : String)
  {
    this.table_lap[this.indice++] = value;
  }


}
