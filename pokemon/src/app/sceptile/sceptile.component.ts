import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Tcg_data } from '../models/stats.model';
@Component({
  selector: 'app-sceptile',
  templateUrl: './sceptile.component.html',
  styleUrls: ['./sceptile.component.css']
})
export class SceptileComponent {
  data!: Pokemon;
  loading!: boolean;
  o !:Observable<Tcg_data>;


  constructor(public http: HttpClient) {}

  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/xy7-85');
    this.o.subscribe(this.getData);
  }
  getData = (d : any) =>
  {

    this.data = d.data;
    this.loading = false;
    
  }

 
}
