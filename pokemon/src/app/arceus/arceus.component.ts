import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Tcg_data } from '../models/stats.model';
@Component({
  selector: 'app-arceus',
  templateUrl: './arceus.component.html',
  styleUrls: ['./arceus.component.css']
})
export class ArceusComponent {
  data!: Pokemon;
  loading!: boolean;
  o !:Observable<Tcg_data>;


  constructor(public http: HttpClient) {}

  makeRequest(): void {
    
    this.loading = true;
    this.o = this.http.get<Tcg_data>('https://api.pokemontcg.io/v2/cards/xyp-XY83');
    this.o.subscribe(this.getData);
  }
  getData = (d : any) =>
  {

    this.data = d.data;
    this.loading = false;
    
  }
}
