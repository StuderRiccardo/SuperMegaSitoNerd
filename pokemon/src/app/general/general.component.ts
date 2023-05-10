import { Component } from '@angular/core';
import { Es, Tcg_data, all } from '../models/stats.model';
import { Data, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SceptileComponent } from '../sceptile/sceptile.component';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  genVect : all[]= [{name:'',img: ''}];
  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (uri_param); //Stampo su console
    //this.service.getTrack()
    if (uri_param == 'sceptile') this.genVect = Es;
    //if (uri_param == 'animals') this.genVect = ANIMALS;
  }
}

