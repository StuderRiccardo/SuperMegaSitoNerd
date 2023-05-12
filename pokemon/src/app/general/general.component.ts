import { Component } from '@angular/core';
import {Pokemon} from '../models/stats.model';
import { Data, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  poke : any = {};
  link : string = '';
  carta : Pokemon[] = []
  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.makerequest("");
    this.http.get("https://api.pokemontcg.io/v2/cards/").subscribe(baller => {
        
      //@ts-ignoreS
      this.carta = baller.data.image.small;
    })

    setInterval(() => {
      this.http.get(this.link).subscribe(baller => {
        //@ts-ignoreS
        this.poke = baller;
      })
    }, 1000)
  }

  makerequest = (a: string) => {
    if (a != "") {
      this.link = "https://api.pokemontcg.io/v2/cards/" + a;
    } else {
      this.route.paramMap.subscribe(this.getRouterParam);
    }
 }
 
  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    
    switch (uri_param) {
      case "arceus":
        this.link = "https://api.pokemontcg.io/v2/cards/xyp-XY83" // -- Arceus
        break;
      case "gengar":
        this.link = "https://api.pokemontcg.io/v2/cards/hgss4-94" // -- Gengar
        break;
      case "greninja":
        this.link = "https://api.pokemontcg.io/v2/cards/sma-SV56" // -- Greninja
        break;
      case "sceptile":
        this.link = "https://api.pokemontcg.io/v2/cards/xy7-85" // -- Sceptile
        break;
      case "umbreon":
        this.link = "https://api.pokemontcg.io/v2/cards/sm1-80" // -- Umbreon
        break;}
  }
}

